import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Layout from '@components/Layout/Layout';

import skipTestCondition from '@utils/skipTestCondition';

/**
 * Check layout render.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('App layout', () => {
  test('Render child', () => {
    render(<Layout>Testing: 12</Layout>);

    expect(screen.getByText(/Testing: 12/i)).toBeDefined();
  });
});
