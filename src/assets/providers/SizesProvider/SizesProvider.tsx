import cn from 'classnames';
import { FC, PropsWithChildren, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import styles from './SizesProvider.module.scss';
import type { SizesProviderProps } from './SizesProvider.props';

const SizesProvider: FC<PropsWithChildren<SizesProviderProps>> = ({
	children,
}) => {
	const classContext = useContext(BodyClassnameContext);

	useEffect(() => {
		classContext.addClassName([styles.sizes]);
	}, []);

	return <>{children}</>;
};

export default SizesProvider;
