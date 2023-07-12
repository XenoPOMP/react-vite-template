import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import UiContainer from '@ui/UiContainer/UiContainer';
import UiGrid from '@ui/UiGrid/UiGrid';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('UI container', () => {
  test('Match snapshot', () => {
    expect(
      render(
        <>
          <UiContainer>Container</UiContainer>
          <UiContainer.Header>Container</UiContainer.Header>
          <UiContainer.Section>Container</UiContainer.Section>
          <UiContainer.Article>Container</UiContainer.Article>
        </>,
      ),
    ).toMatchSnapshot();

    expect(
      render(
        <>
          <UiGrid>Container</UiGrid>
          <UiGrid.Section>Container</UiGrid.Section>
          <UiGrid.Article>Container</UiGrid.Article>
        </>,
      ),
    ).toMatchSnapshot();
  });
});
