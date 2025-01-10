// src/testing/matchers.ts
import { ValidationResult } from '../types';

declare global {
  namespace jest {
      interface Matchers<R> {
          // 新しいマッチャーを追加
          toBeValidResult(): R;                        // 検証結果がOKかチェック
          toHaveValidationError(errorMessage: string): R;  // 特定のエラーメッセージがあるかチェック
      }
  }
}

expect.extend({
  // 検証結果がOKかチェックするマッチャー
  toBeValidResult(received: ValidationResult) {
      // 条件：isValidがtrueかつエラーが0件
      const pass = received.isValid && received.errors.length === 0;
      
      return {
          // テストが失敗した時のメッセージ
          message: () => 
              pass
                  ? 'Expected validation to fail'  // passがtrueの時
                  : 'Expected validation to pass', // passがfalseの時
          pass  // テストが成功したかどうか
      };
  },

  // 特定のエラーメッセージがあるかチェックするマッチャー
  toHaveValidationError(received: ValidationResult, errorMessage: string) {
      // 条件：errors配列に指定のメッセージが含まれているか
      const pass = received.errors.includes(errorMessage);
      
      return {
          message: () =>
              pass
                  ? `Expected validation not to have error "${errorMessage}"`  // passがtrueの時
                  : `Expected validation to have error "${errorMessage}"`,     // passがfalseの時
          pass
      };
  }
});
