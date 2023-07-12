import { FC } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import { PropsWith } from '@type/PropsWith';

import { LayoutProps } from './Layout.props';

/**
 * App layout component.
 *
 * @param children
 * @constructor
 */
const Layout: FC<PropsWith<'children', LayoutProps>> = ({ children }) => {
  return (
    <GlobalProvider>
      <main>{children}</main>
    </GlobalProvider>
  );
};

export default Layout;
