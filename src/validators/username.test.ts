// src/validators/username.test.ts
import { validateUsername } from './username';
import { VALIDATION_RULES } from './rules';
import { ValidationError } from '../errors/ValidationError';

describe('validateUsername', () => {
    describe('basic validation', () => {
        test('accepts valid username', () => {
            expect(() => validateUsername('validuser123')).not.toThrow();
        });

        test('rejects empty username', () => {
            expect(() => validateUsername('')).toThrow(ValidationError);
            expect(() => validateUsername('')).toThrow(VALIDATION_RULES.username.messages.required);
        });
    });

    describe('length validation', () => {
        test('rejects too short username', () => {
            expect(() => validateUsername('ab')).toThrow(ValidationError);
            expect(() => validateUsername('ab')).toThrow(VALIDATION_RULES.username.messages.minLength);
        });

        test('validates maximum length', () => {
            const tooLongUsername = 'a'.repeat(VALIDATION_RULES.username.maxLength + 1);
            expect(() => validateUsername(tooLongUsername)).toThrow(ValidationError);
            expect(() => validateUsername(tooLongUsername)).toThrow(VALIDATION_RULES.username.messages.maxLength);
        });
    });

    describe('pattern validation', () => {
        test('rejects special characters', () => {
            expect(() => validateUsername('user@name')).toThrow(ValidationError);
            expect(() => validateUsername('user@name')).toThrow(VALIDATION_RULES.username.messages.pattern);
        });
    });
});
