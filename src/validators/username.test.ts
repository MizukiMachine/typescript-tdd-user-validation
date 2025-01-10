// src/validators/username.test.ts
import { validateUsername } from './username';
import { VALIDATION_RULES } from './rules';


describe('validateUsername', () => {
    describe('valid cases', () => {
        // 有効なユーザー名のケース
        const validUsernames = [
            { value: 'john123', description: 'alphanumeric' },
            { value: 'user_name', description: 'with underscore' },
            { value: 'abc123', description: 'minimum length' },
            { value: 'a'.repeat(20), description: 'maximum length' }
        ];

        test.each(validUsernames)(
            'accepts valid username: $description',
            ({ value }) => {
                const result = validateUsername(value);
                expect(result.isValid).toBe(true);
                expect(result.errors).toHaveLength(0);
            }
        );
    });

    describe('invalid cases', () => {
        // エラーケースの詳細なテスト
        test('rejects empty username', () => {
            const result = validateUsername('');
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain(VALIDATION_RULES.username.messages.required);
        });

        test('rejects undefined username', () => {
            const result = validateUsername(undefined as any);
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain(VALIDATION_RULES.username.messages.required);
        });

        test('rejects null username', () => {
            const result = validateUsername(null as any);
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain(VALIDATION_RULES.username.messages.required);
        });

        test('rejects too short username', () => {
            const result = validateUsername('ab');
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain(VALIDATION_RULES.username.messages.minLength);
        });

        test('rejects too long username', () => {
            const result = validateUsername('a'.repeat(21));
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain(VALIDATION_RULES.username.messages.maxLength);
        });

        // 無効な文字のテスト
        const invalidCharacters = [
            { value: 'user@name', char: '@' },
            { value: 'user.name', char: '.' },
            { value: 'user-name', char: '-' },
            { value: 'user name', char: 'space' },
            { value: 'user#name', char: '#' }
        ];

        test.each(invalidCharacters)(
            'rejects username with invalid character: $char',
            ({ value }) => {
                const result = validateUsername(value);
                expect(result.isValid).toBe(false);
                expect(result.errors).toContain(VALIDATION_RULES.username.messages.pattern);
            }
        );
    });
});
