import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Option.module.scss';
import type { OptionProps } from './Option.props';

const Option: FC<PropsWithChildren<OptionProps>> = ({ children }) => {
	return <option>{children}</option>;
};

export default Option;
