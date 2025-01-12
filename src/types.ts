// src/types.ts

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface FieldValidationResult {
  [field: string]: string[];
}
