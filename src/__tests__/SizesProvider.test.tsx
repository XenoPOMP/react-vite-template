import { describe, expect, test } from 'vitest';

import styles from '@providers/SizesProvider/SizesProvider.module.scss';

import skipTestCondition from '@utils/skipTestCondition';

import { defaultTestingPageRender } from './defaults';

describe.skipIf(skipTestCondition('FRONTEND'))('Sizes provider', () => {
  test('Match snapshot', () => {
    const page = defaultTestingPageRender().asFragment();

    expect(page.querySelector(`.${styles.sizes}`)).toBeDefined();
  });
});
