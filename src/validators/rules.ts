// src/validators/rules.ts
export const VALIDATION_RULES = {
  username: {
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/,
      messages: {
          required: 'Username is required',
          minLength: 'Username must be at least 3 characters long',
          maxLength: 'Username must be at most 20 characters long',
          pattern: 'Username can only contain letters, numbers and underscores'
      }
  }
};
