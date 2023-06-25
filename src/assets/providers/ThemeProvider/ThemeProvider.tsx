import { FC, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import { PropsWith } from '@type/PropsWith';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
	const classContext = useContext(BodyClassnameContext);

	useEffect(() => {
		classContext.addClassName([styles.themes, styles.dark]);
	}, []);

	return <>{children}</>;
};

export default ThemeProvider;
