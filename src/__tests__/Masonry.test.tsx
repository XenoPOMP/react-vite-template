import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Block from '@ui/masonry/Block/Block';
import Column from '@ui/masonry/Column/Column';
import Masonry from '@ui/masonry/Masonry/Masonry';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Masonry gallery', () => {
  test('Match snapshot', () => {
    expect(
      render(
        <Masonry>
          <Column>
            <Block>1</Block>
            <Block>2</Block>
            <Block>3</Block>
          </Column>

          <Column>
            <Block>4</Block>
            <Block>5</Block>
            <Block>6</Block>
          </Column>

          <Column>
            <Block>7</Block>
            <Block>8</Block>
            <Block>9</Block>
          </Column>
        </Masonry>
      )
    ).toMatchSnapshot();

    expect(
      render(
        <Masonry columns={4}>
          <Column>
            <Block>1</Block>
            <Block>2</Block>
            <Block>3</Block>
          </Column>

          <Column>
            <Block>4</Block>
            <Block>5</Block>
            <Block>6</Block>
          </Column>

          <Column>
            <Block>7</Block>
            <Block>8</Block>
            <Block>9</Block>
          </Column>

          <Column>
            <Block>7</Block>
            <Block>8</Block>
            <Block>9</Block>
          </Column>
        </Masonry>
      )
    ).toMatchSnapshot();
  });
});
