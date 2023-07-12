import cn from 'classnames';
import { FC, PropsWithChildren, useRef } from 'react';

import { PropsWith } from '@type/PropsWith';

import styles from './CheckBox.module.scss';
import type { CheckBoxProps } from './CheckBox.props';

/**
 * Check box component. Built with native checkbox element.
 *
 * @example
 * const [checked, setChecked] = useState<boolean>(false);
 *
 * <CheckBox checked={checked} onClick={state => setChecked(state)}>
 *   Usual
 * </CheckBox>
 *
 * @param children
 * @param checked				determines whether checkbox is
 * 											checked or not.
 * @param disabled			disables checkbox.
 * @param onClick				click callback.
 * @constructor
 */
const CheckBox: FC<PropsWith<'children', CheckBoxProps>> = ({
  children,
  checked,
  disabled,
  onClick,
}) => {
  return (
    <label className={cn(styles.checkBoxLabel)}>
      <input
        type={'checkbox'}
        checked={checked}
        disabled={disabled}
        className={cn(styles.boxInput)}
        onChange={event => {
          if (onClick) {
            onClick(event.target.checked);
          }
        }}
      />
      <span className={cn(styles.mark)}>
        {!checked && !disabled && (
          <svg
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              stroke='#737674'
            />
            <rect
              className={cn(styles.active)}
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              stroke='#0066FF'
            />
          </svg>
        )}

        {checked && !disabled && (
          <svg
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              className={cn(styles.fillActive)}
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              fill='#0066FF'
            />
            <rect
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              stroke='#737674'
            />
            <rect
              className={cn(styles.active)}
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              stroke='#0066FF'
            />
            <path
              className={cn(styles.markIcon)}
              d='M4.5 7.00004L9.00001 11.5L7.50001 13.0001L3 8.50004L4.5 7.00004Z'
              fill='white'
            />
            <path
              className={cn(styles.markIcon)}
              d='M15 5.5L9.00001 11.5L7.49999 10L13.5 4L15 5.5Z'
              fill='white'
            />
          </svg>
        )}

        {!checked && disabled && (
          <svg
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              className={cn(styles.notActive)}
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              stroke='#737674'
            />
          </svg>
        )}

        {checked && disabled && (
          <svg
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              className={cn(styles.notActive, styles.fillNotActive)}
              x='1.5'
              y='1.5'
              width='15'
              height='15'
              rx='2.5'
              fill='#737674'
              stroke='#737674'
            />
            <path
              className={cn(styles.markIcon)}
              d='M4.5 7.00004L9.00001 11.5L7.50001 13.0001L3 8.50004L4.5 7.00004Z'
              fill='white'
            />
            <path
              className={cn(styles.markIcon)}
              d='M15 5.5L9.00001 11.5L7.49999 10L13.5 4L15 5.5Z'
              fill='white'
            />
          </svg>
        )}
      </span>

      {children}
    </label>
  );
};

export default CheckBox;
