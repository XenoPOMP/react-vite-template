import { describe, expect, test } from 'vitest';
import getUiSx from '@utils/getUiSx/getUiSx';

describe('Get UI styles', () => {
  test('return default items if args are not defined', () => {
    expect(getUiSx({})).toStrictEqual({
      '--cols': 12,
      '--rows': 1,
      '--max-width': '1440px',
    });
  });

  test('change column count', () => {
    // @ts-ignore
    const cols = getUiSx({ cols: 5 })['--cols'];

    expect(cols).toBe(5);
  });

  test('change row count', () => {
    const rowCount = 2;
    // @ts-ignore
    const rows = getUiSx({ rows: rowCount })['--rows'];

    expect(rows).toBe(rowCount);
  });

  test('change max width in pixels', () => {
    const width = 100;
    // @ts-ignore
    const maxWidth = getUiSx({ maxWidth: width })['--max-width'];

    expect(maxWidth).toBe(`${width}px`);
  });

  test('change max width to unset', () => {
    const width = 'unset';
    // @ts-ignore
    const maxWidth = getUiSx({ maxWidth: width })['--max-width'];

    expect(maxWidth).toBe(width);
  });
});
