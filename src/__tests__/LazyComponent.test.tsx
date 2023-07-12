import { describe, expect, test } from 'vitest';

import LazyComponent from '@components/LazyComponent/LazyComponent';

import Loader from '@ui/Loader/Loader';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Lazy loading component', () => {
  test('Match snapshot #1', () => {
    expect(
      renderWithProviders(
        <LazyComponent
          element={() => import('@pages/MainPage/MainPage')}
          fallback={<Loader type={'wave'} mainColor={'black'} />}
        />,
        {},
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot #2', () => {
    expect(
      renderWithProviders(
        <LazyComponent
          element={() => import('@pages/MainPage/MainPage')}
          fallback={<Loader type={'circle'} mainColor={'black'} />}
        />,
        {},
      ),
    ).toMatchSnapshot();
  });

  test('Match snapshot #3', () => {
    expect(
      renderWithProviders(
        <LazyComponent
          element={() => import('@pages/MainPage/MainPage')}
          fallback={<Loader type={'three-dots'} mainColor={'black'} />}
        />,
        {},
      ),
    ).toMatchSnapshot();
  });
});
