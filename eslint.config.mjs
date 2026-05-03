import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    plugins: {
      '@nx': nxEslintPlugin,
      '@typescript-eslint': typescriptEslintEslintPlugin,
      jsdoc: eslintPluginJsdoc,
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
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  ...compat
    .config({
      extends: [
        'plugin:@nx/javascript',
        'eslint:recommended',
        'plugin:import/recommended',
      ],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
      rules: {
        ...config.rules,
        'no-extra-semi': 'error',
      },
    })),
  ...compat
    .config({
      extends: [
        'plugin:@nx/typescript',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsdoc/recommended-typescript',
        'prettier',
      ],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
      rules: {
        ...config.rules,
        'no-dupe-class-members': 'off',
        camelcase: 'off',
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
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
            },
            pathGroups: [
              {
                pattern: '@schemetwister/**',
                group: 'internal',
              },
            ],
          },
        ],
        'import/no-unresolved': 'off',
        complexity: ['warn', 10],
        'max-nested-callbacks': ['error', 2],
        'max-depth': [
          'warn',
          {
            max: 2,
          },
        ],
        eqeqeq: ['error', 'smart'],
        'no-extra-semi': 'error',
      },
    })),
  {
    files: ['**/*.store.ts', '**/*.effects.ts'],
    rules: {
      'max-nested-callbacks': 'off',
    },
  },
  ...compat
    .config({
      env: {
        jest: true,
      },
    })
    .map((config) => ({
      ...config,
      files: [
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**.test.ts',
      ],
      rules: {
        ...config.rules,
        'max-nested-callbacks': 'off',
      },
    })),
  {
    ignores: ['node_modules\r', '**/vite.config.ts\r', '**/vitest.d.ts\r'],
  },
];
