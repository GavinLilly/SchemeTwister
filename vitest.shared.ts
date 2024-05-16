import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export const sharedConfig = defineConfig({
  plugins: [nxViteTsPaths()],

  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['lcov'],
      exclude: ['src/**/index.ts'],
    },
  },
});
