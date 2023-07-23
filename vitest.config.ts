import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  // @ts-ignore
  viteConfig,
  // @ts-ignore
  defineConfig({
    test: {
      exclude: [...configDefaults.exclude, 'packages/template/*'],
      coverage: {
        reporter: ['text', 'html', 'json-summary', 'json'],
        provider: 'v8',
      },
    },
  })
);
