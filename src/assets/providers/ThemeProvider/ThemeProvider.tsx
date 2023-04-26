import cn from 'classnames';
import { FC, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import { ProviderProps } from '@providers/Provider.props';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
	const classContext = useContext(BodyClassnameContext);

	useEffect(() => {
		classContext.addClassName([styles.themes, styles.dark]);
	}, []);

	return <>{children}</>;
};

export default ThemeProvider;
