export class ValidationError extends Error {
  constructor(
      public readonly field: string,     // エラーが発生したフィールド名
      public readonly violations: string[] // 検証違反の詳細
  ) {
      super(`Validation failed for ${field}: ${violations.join(', ')}`);
      this.name = 'ValidationError';
  }
}
