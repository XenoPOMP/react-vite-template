import cn from 'classnames';
import { FC } from 'react';

import { PropsWith } from '@type/PropsWith';

import getUiSx from '@utils/getUiSx';

import styles from './UiGrid.module.scss';
import type { UiGridProps } from './UiGrid.props';

interface IUiGridNestedProps
  extends PropsWith<'children' | 'id' | 'className', UiGridProps> {}

const UiGrid: FC<IUiGridNestedProps> & {
  Section: FC<IUiGridNestedProps>;
  Article: FC<IUiGridNestedProps>;
} = ({ children, className, id, cols, rows, gap, maxWidth }) => {
  return (
    <div
      style={{
        ...getUiSx({
          cols,
          rows,
          gap,
          maxWidth,
        }),
      }}
      className={cn(styles.grid, className)}
      id={id}
    >
      {children}
    </div>
  );
};

UiGrid.Section = ({ children, id, className, cols, rows, gap, maxWidth }) => (
  <section
    style={{
      ...getUiSx({
        cols,
        rows,
        gap,
        maxWidth,
      }),
    }}
    id={id}
    className={cn(styles.grid, className)}
  >
    {children}
  </section>
);

UiGrid.Article = ({ children, id, className, cols, rows, gap, maxWidth }) => (
  <article
    style={{
      ...getUiSx({
        cols,
        rows,
        gap,
        maxWidth,
      }),
    }}
    id={id}
    className={cn(styles.grid, className)}
  >
    {children}
  </article>
);

export default UiGrid;
