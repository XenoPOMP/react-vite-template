import { CSSProperties } from 'react';

type MaxWidth = number | 'unset';

export type GridSettings = {
  cols?: number;
  rows?: number;
  maxWidth?: MaxWidth;
};

const getUiSx = (gridSettings: GridSettings): CSSProperties => {
  const {
    cols,
    rows,
    maxWidth
  } = gridSettings;

  const getMaxWidth = (): string | undefined => {
    if (maxWidth === undefined) return undefined;

    if (maxWidth === 'unset') return maxWidth;

    return `${maxWidth}px`;
  }

  return {
    '--cols': cols ? cols : 12,
    '--rows': rows ? rows : 1,
    '--max-width' : getMaxWidth() ? getMaxWidth() : '1440px'
  } as CSSProperties;
};

export default getUiSx;