export const VALIDATION_RULES = {
  username: {
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9]+$/,
    messages: {
      required: 'Username is required',
      minLength: 'Username must be at least 3 characters long',
      maxLength: 'Username must be at most 20 characters long',
      pattern: 'Username must contain only letters, numbers and underscores'
    }
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messages: {
      required: 'Email is required',
      pattern: 'Invalid email format'
    }
  },
  password: {
    minLength: 8,
    maxLength: 30,
    patterns: {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/
    },
    messages: {
      required: 'Password is required',
      minLength: 'Password must be at least 8 characters long',
      maxLength: 'Password must be at most 30 characters long',
      uppercase: 'Password must contain at least one uppercase letter',
      lowercase: 'Password must contain at least one lowercase letter',
      number: 'Password must contain at least one number'
    }
  },
  age: {
    min: 13,
    max: 120,
    messages: {
        required: 'Age is required',
        min: 'Age must be at least 13',
        max: 'Age must be at most 120',
        type: 'Age must be a number'
    }
  }
};
