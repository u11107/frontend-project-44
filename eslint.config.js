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
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      indent: ["error", 2],
    },
  },
];
