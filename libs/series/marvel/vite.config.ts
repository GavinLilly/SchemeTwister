/// <reference types='vitest' />
import { mergeConfig } from 'vite';

import { sharedConfig } from '../../../vitest.shared';

export default mergeConfig(sharedConfig, {
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/series/marvel',

  test: {
    coverage: {
      reportsDirectory: '../../../coverage/libs/series/marvel',
    },
  },
});