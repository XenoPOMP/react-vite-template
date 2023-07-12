import cn from 'classnames';
import { FC } from 'react';

import { PropsWith } from '@type/PropsWith';

import styles from './Block.module.scss';
import type { BlockProps } from './Block.props';

/**
 * See docs in {@link Masonry}.
 *
 * @param className
 * @param style
 * @param id
 * @param children
 * @constructor
 */
const Block: FC<
  PropsWith<'className' | 'style' | 'id' | 'children', BlockProps>
> = ({ className, style, id, children }) => {
  return (
    <div className={cn(styles.block, className)} id={id} style={style}>
      {children}
    </div>
  );
};

export default Block;
