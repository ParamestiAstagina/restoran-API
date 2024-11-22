import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import jestPlugin from 'eslint-plugin-jest';



export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
  jestPlugin.configs.recommended,


  {
    rules: {
      'space-infix-ops': ['error'],
      'brace-style': ['error', '1tbs'],
      'space-before-blocks': ['error', 'always'],

    },
  },
];