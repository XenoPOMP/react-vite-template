import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import skipTestCondition from '@utils/skipTestCondition';

import mockImage from '@media/moks/fake-four-k-image.jpg';

describe.skipIf(skipTestCondition('FRONTEND'))('Progressive image', () => {
  test('Match snapshot', () => {
    expect(
      render(
        <>
          <ProgressiveImage
            loaderColorScheme={{
              backgroundColor: 'transparent',
              loaderColor: 'black',
            }}
            src={mockImage}
          />
          <ProgressiveImage
            loaderColorScheme={{
              backgroundColor: 'transparent',
              loaderColor: 'black',
            }}
          />
        </>,
      ),
    ).toMatchSnapshot();
  });

  test('Element loading', () => {
    const image = render(
      <div>
        <ProgressiveImage
          loaderColorScheme={{
            backgroundColor: 'transparent',
            loaderColor: 'black',
          }}
          src={mockImage}
        />
      </div>,
    ).asFragment();

    image.addEventListener('onload', ev => {
      expect(image.querySelector('img')).toBeDefined();
    });
  });
});
