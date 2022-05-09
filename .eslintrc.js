module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-var': 'error',
    'prefer-template': 'error',
    'no-console': 'error',
  },
};
