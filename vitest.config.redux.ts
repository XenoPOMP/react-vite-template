import { mergeConfig } from 'vite';
import viteConfig from './vite.config';
import { configDefaults, defineConfig } from 'vitest/config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [
        ...configDefaults.exclude,
        'packages/template/*',
        'tests/app/*',
      ],
    },
  }),
);
