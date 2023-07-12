import { describe, expect, test } from 'vitest';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

/**
 * Test renderWithProviders function.
 *
 * This function has to return UI wrapped with providers.
 */

describe.skipIf(skipTestCondition('FRONTEND'))(
  'Render with providers wrapper',
  () => {
    test('No wrap with no args', () => {
      const component = renderWithProviders(<div>123</div>);

      expect(component).toMatchSnapshot();
    });

    test('Enable wrappers', () => {
      const component = renderWithProviders(<div>123</div>, {
        useRedux: true,
        useRouter: true,
        useQuery: true,
      });

      expect(component).toMatchSnapshot();
    });
  },
);
