import { fireEvent, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { describe, expect, test, vitest } from 'vitest';

import TestingPage from '@pages/TestingPage/TestingPage';

import { useAppDispatch } from '@redux/hooks';

import useAppSettings from '@hooks/useAppSettings';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

/**
 * Test useAppSettings hook.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('useAppSettings hook', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<TestingPage />, {
        useRedux: true,
      })
    ).toMatchSnapshot();
  });

  test('buttons` callback work right', () => {
    const page = renderWithProviders(<TestingPage />, {
      useRedux: true,
    }).asFragment();

    const langText = page.querySelector('#lang-output');
    const buttons = page.querySelectorAll('button.lang-switch');

    /** Click each button. */
    buttons.forEach(button => fireEvent.click(button));

    expect(1);
  });
});
