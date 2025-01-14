// src/validators/username.ts
import { ValidationResult } from '../types';
import { VALIDATION_RULES } from './rules';
import { ValidationError } from '../errors/ValidationError';

export function validateUsername(username: string): ValidationResult {
  const errors: string[] = [];
  const rules = VALIDATION_RULES.username;

  // 必須チェック（即時エラー）
  if (!username) {
    throw new ValidationError('username', [rules.messages.required]);
}

  // 最小長チェック
  if (username.length < rules.minLength) {
      errors.push(rules.messages.minLength);
  }

  // 最大長チェック
  if (username.length > rules.maxLength) {
      errors.push(rules.messages.maxLength);
  }

  // パターンチェック
  if (!rules.pattern.test(username)) {
      errors.push(rules.messages.pattern);
  }

  // エラーがある場合は例外をスロー
  if (errors.length > 0) {
      throw new ValidationError('username', errors);
  }

  // 全てのチェックに通過
  return { isValid: true, errors: [] };
}
