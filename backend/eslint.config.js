import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },

    rules: {
      'no-console': 'off',
      'no-process-exit': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'require-await': 'warn',
      'no-return-await': 'warn',
      'consistent-return': 'warn',
    },
  },

  prettier,
];
