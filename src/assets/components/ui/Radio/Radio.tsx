import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { PropsWith } from '@type/PropsWith';

import styles from './Radio.module.scss';
import type { RadioProps } from './Radio.props';

/**
 * Styled radio component.
 *
 * @example
 * <Radio name={'power'}>On</Radio>
 * <Radio name={'power'}>Off</Radio>
 *
 * @param children
 * @param name
 * @constructor
 */
const Radio: FC<PropsWith<'children', RadioProps>> = ({ children, name }) => {
  return (
    <label className={cn(styles.radio)}>
      <input type={'radio'} name={name} className={cn(styles.radioButton)} />

      <span className={cn(styles.mark)}>
        <svg
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn(styles.unChecked)}
        >
          <rect
            x='1.5'
            y='1.5'
            width='15'
            height='15'
            rx='7.5'
            stroke='#737674'
          />
          <rect
            className={cn(styles.outline)}
            x='1.5'
            y='1.5'
            width='15'
            height='15'
            rx='7.5'
            stroke='#0066FF'
          />
        </svg>

        <svg
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn(styles.checked)}
        >
          <rect
            className={cn(styles.fill)}
            x='1.5'
            y='1.5'
            width='15'
            height='15'
            rx='7.5'
            fill='#0066FF'
          />
          <rect
            x='1.5'
            y='1.5'
            width='15'
            height='15'
            rx='7.5'
            stroke='#737674'
          />
          <rect
            className={cn(styles.outline)}
            x='1.5'
            y='1.5'
            width='15'
            height='15'
            rx='7.5'
            stroke='#0066FF'
          />
          <rect
            className={cn(styles.icon)}
            x='5'
            y='5'
            width='8'
            height='8'
            rx='4'
            fill='white'
          />
        </svg>
      </span>

      {children}
    </label>
  );
};

export default Radio;
