// src/types.ts
export interface ValidationResult {
  isValid: boolean;    // バリデーション結果
  errors: string[];    // エラーメッセージの配列
}

export interface FieldValidationResult {
  [field: string]: string[];  // キーは文字列型、値は文字列の配列型としたエラーメッセージのマップ
}
