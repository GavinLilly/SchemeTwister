/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/schemetwister-series-marvelvillains',

  plugins: [nxViteTsPaths()],

  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      enabled: true,
      reportsDirectory:
        '../../coverage/libs/schemetwister-series-marvelvillains',
      provider: 'v8',
      reporter: ['lcov'],
    },
  },
});
