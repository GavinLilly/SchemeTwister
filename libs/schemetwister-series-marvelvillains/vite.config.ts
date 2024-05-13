/// <reference types='vitest' />
import { defineConfig } from 'vite';
import baseConfig from '../../vite.base.config';

export default defineConfig({
  ...baseConfig,
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/schemetwister-series-marvelvillains',
  test: {
    ...baseConfig.test,
    coverage: {
      ...baseConfig.test?.coverage,
      reportsDirectory:
        '../../coverage/libs/schemetwister-series-marvelvillains',
    },
  },
});
