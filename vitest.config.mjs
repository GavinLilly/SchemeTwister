import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['./libs/series/marvel-villains/vite.config.ts', './libs/series/marvel-studios/vite.config.ts', './libs/series/marvel/vite.config.ts', './libs/series/buffy/vite.config.ts', './libs/libtwister-testing/vite.config.ts', './libs/libtwister/vite.config.ts'],
  },
});
