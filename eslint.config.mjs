import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  {
    'rules': {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'eol-last': ['error', 'always']
    },
    'ignores': [
      'dist/',
      'node_modules/'
    ]
  },
  ...tseslint.configs.recommended,
];
