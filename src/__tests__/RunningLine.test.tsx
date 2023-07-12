import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import RunningLine from '@ui/RunningLine/RunningLine';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Running line component', () => {
  test('Match snapshot', () => {
    expect(
      render(<RunningLine verticalAlign>Some line content</RunningLine>),
    ).toMatchSnapshot();

    expect(
      render(<RunningLine>Some line content</RunningLine>),
    ).toMatchSnapshot();
  });
});
