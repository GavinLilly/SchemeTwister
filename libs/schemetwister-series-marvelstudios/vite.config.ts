/// <reference types='vitest' />
import { defineConfig } from 'vite';
import baseConfig from '../../vite.base.config';

export default defineConfig({
  ...baseConfig,
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/schemetwister-series-marvelstudios',
  test: {
    ...baseConfig.test,
    coverage: {
      ...baseConfig.test?.coverage,
      reportsDirectory:
        '../../coverage/libs/schemetwister-series-marvelstudios',
    },
  },
});
