import { describe, expect, test } from 'vitest';

import DragMenu from '@ui/DragMenu/DragMenu';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Draggable menu', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(
        <DragMenu axis={'x'}>
          <div>Drag me</div>
        </DragMenu>,
      ),
    ).toMatchSnapshot();

    expect(
      renderWithProviders(
        <DragMenu
          axis={'x'}
          classNames={{
            constraint: 'parent class',
          }}
        >
          <div>Drag me</div>
        </DragMenu>,
      ),
    ).toMatchSnapshot();

    expect(
      renderWithProviders(
        <DragMenu
          axis={'x'}
          classNames={{
            constraint: 'parent class',
            draggable: 'child class',
          }}
        >
          <div>Drag me</div>
        </DragMenu>,
      ),
    ).toMatchSnapshot();
  });
});
