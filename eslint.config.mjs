// eslint.config.js
import antfu from '@antfu/eslint-config';
import stylistic from '@stylistic/eslint-plugin';

export default antfu(
  {
    plugins: [stylistic],
    vue: true,
    unocss: true,
  },
  {
    rules: {
      '@stylistic/semi': [2, 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'no-unused-vars': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'return', next: '*' },
        { blankLine: 'always', prev: '*', next: 'directive' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'never', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'always', prev: 'export', next: '*' },
        { blankLine: 'any', prev: 'export', next: 'export' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['block', 'block-like'] },
        { blankLine: 'always', prev: ['block', 'block-like'], next: '*' },
      ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info', 'debug', 'groupCollapsed', 'groupEnd'],
        },
      ],
      'import/extensions': ['error', 'always', { ignorePackages: true }],
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index', 'Router404'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      'vue/no-unused-components': 'error',
      'vue/no-undef-components': 'error',
    },
  },
);
