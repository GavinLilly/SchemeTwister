/// <reference types='vitest' />
import { mergeConfig } from 'vite';

import { sharedConfig } from '../../vitest.shared';

export default mergeConfig(sharedConfig, {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/libtwister-testing',

  test: {
    setupFiles: ['vitest.d.ts'],
    coverage: {
      reportsDirectory: '../../coverage/libs/libtwister-testing',
    },
  },
});
