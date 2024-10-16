import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      indent: ['error', 2], // Убраны кавычки
      quotes: ['error', "single"], // Убраны кавычки
      'no-console': 'off',
      'import/newline-after-import': ['error', { count: 1 }],
    },
  },
];
