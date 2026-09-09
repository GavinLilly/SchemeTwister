import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export const sharedConfig = defineConfig({
  plugins: [tsconfigPaths()],

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
