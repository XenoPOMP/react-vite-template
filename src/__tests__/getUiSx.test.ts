import { describe, expect, test } from 'vitest';

import getUiSx from '@utils/getUiSx';
import { GridSettings } from '@utils/getUiSx';
import skipTestCondition from '@utils/skipTestCondition';

/**
 * Function getUiSx has to return object with grid settings.
 *
 * This function takes {@link GridSettings} as argument.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('Get UI styles', () => {
  test('change column count', () => {
    // Ожидаем, что если передать в настройках кол-во столбцов,
    // то функция корректно вернет CSSProperties.
    // @ts-ignore
    const cols = getUiSx({ cols: 5 })['--cols'];

    expect(cols).toBe(5);
  });

  test('change row count', () => {
    // Ожидаем, что передача кол-ва строк также корректно работает.
    const rowCount = 2;
    // @ts-ignore
    const rows = getUiSx({ rows: rowCount })['--rows'];

    expect(rows).toBe(rowCount);
  });

  test('change max width in pixels', () => {
    // Ожидаем, что передача максимальной ширины также корректно работает.
    const width = 100;
    // @ts-ignore
    const maxWidth = getUiSx({ maxWidth: width })['--max-width'];

    expect(maxWidth).toBe(`${width}px`);
  });

  test('change max width to unset', () => {
    // Ожидаем, что если передать значение максимальной ширины,
    // как 'unset', то функция корректно вернет CSSProperties.
    const width = 'unset';
    // @ts-ignore
    const maxWidth = getUiSx({ maxWidth: width })['--max-width'];

    expect(maxWidth).toBe(width);
  });

  test('change gap in pixels', () => {
    // Ожидаем, что передача пробела также корректно работает.
    const gap = 10;
    // @ts-ignore
    const gapValue = getUiSx({ gap })['--gap'];

    expect(gapValue).toBe(gap);
  });
});
