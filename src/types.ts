// src/types.ts
export interface UserInput {
  username: string;
  email: string;
  password: string;
  age: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface FieldValidationResult {
  [field: string]: string[];
}
