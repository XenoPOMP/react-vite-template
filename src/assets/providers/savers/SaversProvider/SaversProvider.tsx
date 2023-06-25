import cn from 'classnames';
import { FC } from 'react';

import { PropsWith } from '@type/PropsWith';

import styles from './SaversProvider.module.scss';
import type { SaversProviderProps } from './SaversProvider.props';

const SaversProvider: FC<PropsWith<'children', SaversProviderProps>> = ({
	children,
}) => {
	return <>{children}</>;
};

export default SaversProvider;
