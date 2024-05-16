/// <reference types='vitest' />
import { mergeConfig } from 'vite';

import { sharedConfig } from '../../vitest.shared';

export default mergeConfig(sharedConfig, {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/schemetwister-series-marvelvillains',

  test: {
    coverage: {
      reportsDirectory:
        '../../coverage/libs/schemetwister-series-marvelvillains',
    },
  },
});
