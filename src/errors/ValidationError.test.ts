// src/errors/ValidationError.test.ts
import { ValidationError } from './ValidationError';

describe('ValidationError', () => {
    test('formats error message correctly', () => {
        const error = new ValidationError(
            'username', 
            ['Too short', 'Invalid characters']
        );
        
        // メッセージフォーマットの確認
        expect(error.message).toBe(
            'Validation failed for username: Too short, Invalid characters'
        );
        
        // プロパティの確認
        expect(error.field).toBe('username');
        expect(error.violations).toEqual(['Too short', 'Invalid characters']);
    });
});
