import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

import { PropsWith } from '@type/PropsWith';

const GlobalProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  return (
    <>
      <BodyClassnameProvider>
        <SizesProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SizesProvider>
      </BodyClassnameProvider>
    </>
  );
};

export default GlobalProvider;
