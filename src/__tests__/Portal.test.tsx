import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Portal from '@components/Portal/Portal';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Portal component', () => {
  test('Disable rendering', () => {
    render(
      <Portal enabled={false}>
        <div>Test me</div>
      </Portal>,
    );

    expect(document.querySelectorAll('div').length).toBe(1);
  });

  test('Activate rendering', () => {
    render(
      <Portal enabled={true}>
        <div>Test me</div>
      </Portal>,
    );

    expect(screen.getByText(/Test me/gi)).toBeDefined();
  });
});
