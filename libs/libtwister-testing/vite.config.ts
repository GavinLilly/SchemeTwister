/// <reference types='vitest' />
import { defineConfig } from 'vite';
import baseConfig from '../../vite.base.config';

export default defineConfig({
  ...baseConfig,
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/libtwister-testing',
  test: {
    ...baseConfig.test,
    coverage: {
      ...baseConfig.test?.coverage,
      reportsDirectory: '../../coverage/libs/libtwister-testing',
    },
    setupFiles: ['vitest.d.ts'],
  },
});
