import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import SplashScreen from '@components/SplashScreen/SplashScreen';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('SplashScreen component', () => {
  test('Match snapshot', () => {
    expect(render(<SplashScreen />)).toMatchSnapshot();
  });
});
