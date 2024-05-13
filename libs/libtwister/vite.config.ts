/// <reference types='vitest' />
import { defineConfig } from 'vite';
import baseConfig from '../../vite.base.config';

export default defineConfig({
  ...baseConfig,
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/libtwister',
  test: {
    ...baseConfig.test,
    globals: true,
    coverage: {
      ...baseConfig.test?.coverage,
      reportsDirectory: '../../coverage/libs/libtwister',
    },
  },
});
