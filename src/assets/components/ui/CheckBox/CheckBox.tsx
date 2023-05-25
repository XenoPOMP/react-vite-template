import cn from 'classnames';
import { FC, PropsWithChildren, useRef } from 'react';

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
const CheckBox: FC<PropsWithChildren<CheckBoxProps>> = ({
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
							x='1.5'
							y='1.5'
							width='15'
							height='15'
							rx='2.5'
							stroke='#0066FF'
						/>
						<path
							d='M6 8.00003L9.00001 11L8.00001 12L5 9.00003L6 8.00003Z'
							fill='white'
						/>
						<path d='M13 7L9.00001 11L7.99999 10L12 6L13 7Z' fill='white' />
					</svg>
				)}

				{!checked && disabled && (
					<svg
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g opacity='0.5' clip-path='url(#clip0_2_37)'>
							<rect
								x='0.5'
								y='0.5'
								width='17'
								height='17'
								rx='3.5'
								stroke='#00FF57'
								className={cn(styles.outline)}
							/>
							<rect
								x='1.5'
								y='1.5'
								width='15'
								height='15'
								rx='2.5'
								stroke='#737674'
							/>
						</g>
						<defs>
							<clipPath id='clip0_2_37'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
				)}

				{checked && disabled && (
					<svg
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g opacity='0.5' clip-path='url(#clip0_2_43)'>
							<rect
								x='0.5'
								y='0.5'
								width='17'
								height='17'
								rx='3.5'
								stroke='#00FF57'
								className={cn(styles.outline)}
							/>
							<rect
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
								fill='#737674'
							/>
							<rect
								x='1.5'
								y='1.5'
								width='15'
								height='15'
								rx='2.5'
								stroke='#737674'
							/>
							<path
								d='M6 8.00003L9.00001 11L8.00001 12L5 9.00003L6 8.00003Z'
								fill='white'
							/>
							<path d='M13 7L9.00001 11L7.99999 10L12 6L13 7Z' fill='white' />
						</g>
						<defs>
							<clipPath id='clip0_2_43'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
				)}
			</span>

			{children}
		</label>
	);
};

export default CheckBox;
