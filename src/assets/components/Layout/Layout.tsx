import { FC, PropsWithChildren } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import { LayoutProps } from './Layout.props';

/**
 * App layout component.
 *
 * @param children
 * @constructor
 */
const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return (
		<GlobalProvider>
			<main>{children}</main>
		</GlobalProvider>
	);
};

export default Layout;
