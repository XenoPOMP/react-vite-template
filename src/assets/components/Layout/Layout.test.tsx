import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '@components/Layout/Layout';

describe('App layout', () => {
  test('Render child', () => {
    render(<Layout>Testing: 12</Layout>);

    expect(screen.getByText(/Testing: 12/i)).toBeDefined();
  });
});
