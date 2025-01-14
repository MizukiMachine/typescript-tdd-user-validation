// src/testing/matchers.ts
import { ValidationResult } from '../types';

// 1. まずTypeScriptに新しいマッチャーの型を教える
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeValidResult(): R;
            toHaveValidationError(errorMessage: string): R;
        }
    }
}

// 2. マッチャーの実装
expect.extend({
    // バリデーション成功を確認するマッチャー
    toBeValidResult(received: ValidationResult) {
        const pass = received.isValid && received.errors.length === 0;
        
        // テストが失敗したときのメッセージも設定
        return {
            message: () => 
                pass
                    ? 'バリデーションは失敗するはずでした'
                    : 'バリデーションは成功するはずでした',
            pass
        };
    },

    // エラーメッセージを確認するマッチャー
    toHaveValidationError(received: ValidationResult, errorMessage: string) {
        const pass = received.errors.includes(errorMessage);
        return {
            message: () =>
                pass
                    ? `エラー "${errorMessage}" は含まれないはずでした`
                    : `エラー "${errorMessage}" が含まれるはずでした`,
            pass
        };
    }
});
