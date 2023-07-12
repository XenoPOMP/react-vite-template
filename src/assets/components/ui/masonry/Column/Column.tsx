import cn from 'classnames';
import { FC } from 'react';

import { PropsWith } from '@type/PropsWith';

import styles from './Column.module.scss';
import type { ColumnProps } from './Column.props';

/**
 * See docs in {@link Masonry}.
 *
 * @param children
 * @param className
 * @param style
 * @param id
 * @constructor
 */
const Column: FC<
  PropsWith<'className' | 'style' | 'id' | 'children', ColumnProps>
> = ({ children, className, style, id }) => {
  return (
    <div className={cn(styles.column, className)} id={id} style={style}>
      {children}
    </div>
  );
};

export default Column;
