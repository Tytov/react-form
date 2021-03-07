module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-shadow': 'error',
    eqeqeq: 'error',
    'no-sequences': 'error',
    'react/no-string-refs': 'error',
    'no-console': 'warn',
  },
};
