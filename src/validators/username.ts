// src/validators/username.ts
import { ValidationResult } from '../types';
import { VALIDATION_RULES } from './rules';

export function validateUsername(username: unknown): ValidationResult {
    const errors: string[] = [];
    const rules = VALIDATION_RULES.username;

    // 必須チェック
    if (!username || typeof username !== 'string' || username.trim() === '') {
        errors.push(rules.messages.required);
        return { isValid: false, errors };
    }

    // 長さチェック
    if (username.length < rules.minLength) {
        errors.push(rules.messages.minLength);
    }
    if (username.length > rules.maxLength) {
        errors.push(rules.messages.maxLength);
    }

    // パターンチェック
    if (!rules.pattern.test(username)) {
        errors.push(rules.messages.pattern);
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}
