import cn from 'classnames';
import { describe, expect, test } from 'vitest';

import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import styles from '@providers/ThemeProvider/ThemeProvider.module.scss';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

/**
 * Test ThemeProvider component.
 *
 * This provider adds CSS variables for themes.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('Theme Provider', () => {
  test('Classname', () => {
    renderWithProviders(<ThemeProvider />, {
      useRedux: true,
    });

    const selector = document.querySelector(
      `div ${cn(styles.themes, styles.dark)}`,
    );

    expect(selector).toBeDefined();
  });
});
