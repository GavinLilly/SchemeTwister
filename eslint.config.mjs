import nx from '@nx/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { importX } from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/typescript'],
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
      '**/eslint.config.mjs',
      '**/vite.config.ts',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: [
            './tsconfig.base.json',
            '**/tsconfig.json',
            '**/tsconfig.*.json',
          ],
        },
      },
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      jsdoc,
    },
    // Override or add rules here
    rules: {
      ...jsdoc.configs['flat/recommended-typescript'].rules,
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          modifiers: ['abstract'],
          format: ['PascalCase'],
          prefix: ['Abstract'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@schemetwister/**',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'max-nested-callbacks': ['error', 2],
      'max-depth': [
        'warn',
        {
          max: 2,
        },
      ],
      eqeqeq: ['error', 'smart'],
    },
  },
  {
    files: ['**/*.store.ts', '**/*.effects.ts'],
    rules: {
      'max-nested-callbacks': 'off',
    },
  },
  {
    files: [
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
      '**.test.ts',
    ],
    rules: {
      'max-nested-callbacks': 'off',
    },
  },
];
