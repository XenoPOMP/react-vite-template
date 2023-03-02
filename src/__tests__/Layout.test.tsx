import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '@components/Layout/Layout';
import useEnv from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

describe.skipIf(TESTING_MODE === 'BACKEND')('App layout', () => {
  test('Render child', () => {
    render(<Layout>Testing: 12</Layout>);

    expect(screen.getByText(/Testing: 12/i)).toBeDefined();
  });
});
