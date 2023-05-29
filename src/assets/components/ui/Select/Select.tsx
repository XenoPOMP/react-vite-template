import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Select.module.scss';
import type { SelectProps } from './Select.props';

const Select: FC<PropsWithChildren<SelectProps>> = ({
	children,
	disableChecked,
}) => {
	return (
		<div className={cn(styles.selectPlaceholder)}>
			<select
				className={cn(styles.select, disableChecked && styles.disableChecked)}
			>
				{children}
			</select>

			<svg
				className={cn(styles.icon)}
				viewBox='0 0 11 7'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M4.53553 5.94975C4.92606 6.34027 5.55922 6.34027 5.94975 5.94975L10.1924 1.70711C10.5829 1.31658 10.5829 0.683417 10.1924 0.292893C9.80186 -0.0976311 9.1687 -0.0976311 8.77817 0.292893L5.24264 3.82843L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L4.53553 5.94975Z'
					fill='#0066FF'
				/>
			</svg>
		</div>
	);
};

export default Select;
