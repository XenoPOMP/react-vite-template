import { PropsWith } from '@xenopomp/react-essentials';

import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

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
