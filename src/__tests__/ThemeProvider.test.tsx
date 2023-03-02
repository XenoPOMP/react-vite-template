import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import cn from 'classnames';
import styles from '@providers/ThemeProvider/ThemeProvider.module.scss';

describe('Theme Provider', () => {
  test('Classname', () => {
    render(<ThemeProvider />);

    const selector = document.querySelector(
      `div ${cn(styles.themes, styles.dark)}`,
    );

    expect(selector).toBeDefined();
  });
});
