import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { UserConfig } from 'vite';

export default {
  plugins: [nxViteTsPaths()],
  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['lcov'],
    },
  },
} as UserConfig;
