// src/testing/factories.ts
import { UserInput } from '../types';

export function createValidUserInput(override: Partial<UserInput> = {}): UserInput {
    return {
        username: 'validuser',
        email: 'test@example.com',
        password: 'ValidPass123',
        age: 25,
        ...override
    };
}
