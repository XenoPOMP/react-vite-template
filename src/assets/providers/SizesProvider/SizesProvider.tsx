import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './SizesProvider.module.scss';
import type { SizesProviderProps } from './SizesProvider.props';

const SizesProvider: FC<PropsWith<'children', SizesProviderProps>> = ({
  children,
}) => {
  return <div className={cn(styles.sizes)}>{children}</div>;
};

export default SizesProvider;
