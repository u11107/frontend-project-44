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
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'import/prefer-default-export': 'off',
      'no-multiple-empty-lines': ['error', { 'max': 0 }]
    },
  },
];
