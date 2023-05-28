import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Select.module.scss';
import type { SelectProps } from './Select.props';

const Select: FC<PropsWithChildren<SelectProps>> = ({ children }) => {
	return <select className={cn(styles.select)}>{children}</select>;
};

export default Select;
