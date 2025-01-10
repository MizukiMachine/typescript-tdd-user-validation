// src/testing/matchers.ts
import { ValidationResult } from '../types';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeValidResult(): R;
            toHaveValidationError(errorMessage: string): R;
        }
    }
}

expect.extend({
    toBeValidResult(received: ValidationResult) {
        const pass = received.isValid && received.errors.length === 0;
        return {
            message: () => 
                pass
                    ? 'Expected validation to fail'
                    : 'Expected validation to pass',
            pass
        };
    },

    toHaveValidationError(received: ValidationResult, errorMessage: string) {
        const pass = received.errors.includes(errorMessage);
        return {
            message: () =>
                pass
                    ? `Expected validation not to have error "${errorMessage}"`
                    : `Expected validation to have error "${errorMessage}"`,
            pass
        };
    }
});
