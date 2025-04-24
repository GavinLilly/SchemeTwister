import baseConfig from '../../eslint.config.mjs';

export default [
  {
    ignores: ['**/dist'],
  },
  ...baseConfig,
  {
    files: ['**/*.test.ts'],
    rules: {
      'max-nested-callbacks': 'off',
    },
  },
  {
    ignores: ['**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
  },
];
