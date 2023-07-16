import { describe, expect, test } from 'vitest';

import Redirect from '@components/Redirect/Redirect';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Redirect component', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<Redirect to={'/'} triggered={true} />, {
        useRouter: true,
      })
    ).toMatchSnapshot();

    expect(
      renderWithProviders(<Redirect to={'/'} triggered={false} />, {
        useRouter: true,
      })
    ).toMatchSnapshot();
  });
});
