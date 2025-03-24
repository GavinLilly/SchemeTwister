/// <reference types='vitest' />
import { mergeConfig } from 'vite';

import { sharedConfig } from '../../vitest.shared';

export default mergeConfig(sharedConfig, {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/libtwister',

  test: {
    setupFiles: ['../../tools/vitest/custom-matchers.ts'],
    globals: true,
    coverage: {
      reportsDirectory: '../../coverage/libs/libtwister',
    },
  },
});
