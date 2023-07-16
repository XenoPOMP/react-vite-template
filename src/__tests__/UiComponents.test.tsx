import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import CheckBox from '@ui/CheckBox/CheckBox';
import Radio from '@ui/Radio/Radio';

import skipTestCondition from '@utils/skipTestCondition';

import { defaultTestingPageRender } from './defaults';

describe.skipIf(skipTestCondition('FRONTEND'))('UI Components', () => {
  test('Match snapshot', () => {
    expect(render(<CheckBox>It is checkbox!</CheckBox>)).toMatchSnapshot();
    expect(
      render(<CheckBox checked>It is checkbox!</CheckBox>)
    ).toMatchSnapshot();
    expect(
      render(<CheckBox disabled>It is checkbox!</CheckBox>)
    ).toMatchSnapshot();
    expect(
      render(
        <CheckBox checked disabled>
          It is checkbox!
        </CheckBox>
      )
    ).toMatchSnapshot();

    // expect(render(<CustomSelect />)).toMatchSnapshot();
    expect(render(<Radio />)).toMatchSnapshot();
  });

  test('Checkbox click event', () => {
    const page = defaultTestingPageRender().asFragment();

    const textField = page.querySelector('#check-preview');
    const text = textField !== null ? textField.textContent : 'false';
    const button = page.querySelector('button#checkbox-test');

    expect(text).toBe('false');
  });
});
