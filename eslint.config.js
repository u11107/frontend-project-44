import globals from 'globals';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    {
        plugins: {
            import: importPlugin,
        },
        rules: {
            indent: ['error', 4],
            quotes: ['error', 'single'],
            'no-console': 'off',
            'import/newline-after-import': ['error', { count: 1 }],
        },
    },
];
