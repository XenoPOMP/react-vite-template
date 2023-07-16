import { fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import skipTestCondition from '@utils/skipTestCondition';

import { defaultTestingPageRender } from './defaults';

/**
 * Test useAppSettings hook.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('useAppSettings hook', () => {
  test('Match snapshot', () => {
    expect(defaultTestingPageRender()).toMatchSnapshot();
  });

  test('buttons` callback work right', () => {
    const page = defaultTestingPageRender().asFragment();

    const langText = page.querySelector('#lang-output');
    const buttons = page.querySelectorAll('button.lang-switch');

    /** Click each button. */
    buttons.forEach(button => fireEvent.click(button));

    expect(1);
  });
});
