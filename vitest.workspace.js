import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './libs/schemetwister-series-marvelvillains/vite.config.ts',
  './libs/schemetwister-series-marvelstudios/vite.config.ts',
  './libs/schemetwister-series-marvel/vite.config.ts',
  './libs/schemetwister-series-buffy/vite.config.ts',
  './libs/libtwister-testing/vite.config.ts',
  './libs/libtwister/vite.config.ts',
]);
