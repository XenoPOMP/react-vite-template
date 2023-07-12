import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import { PropsWith } from '@type/PropsWith';

import styles from './Masonry.module.scss';
import type { MasonryProps } from './Masonry.props';

/**
 * Masonry grid component.
 *
 * @param columns
 * @param className
 * @param style
 * @param id
 * @param children
 * @constructor
 *
 * @example
 * <Masonry>
 *   <Column>
 *     <Block className={cn('border border-black h-[100px]')}></Block>
 *     <Block className={cn('border border-black h-[200px]')}></Block>
 *   </Column>
 *
 *   <Column>
 *     <Block className={cn('border border-black h-[200px]')}></Block>
 *     <Block className={cn('border border-black h-[100px]')}></Block>
 *   </Column>
 *
 *   <Column>
 *     <Block className={cn('border border-black h-[100px]')}></Block>
 *     <Block className={cn('border border-black h-[200px]')}></Block>
 *   </Column>
 * </Masonry>
 */
const Masonry: FC<
  PropsWith<'className' | 'style' | 'id' | 'children', MasonryProps>
> = ({ columns, className, style, id, children }) => {
  return (
    <div
      className={cn(styles.masonry, className)}
      style={
        { ...style, '--column-count': columns ? columns : 3 } as CSSProperties
      }
      id={id}
    >
      {children}
    </div>
  );
};

export default Masonry;
