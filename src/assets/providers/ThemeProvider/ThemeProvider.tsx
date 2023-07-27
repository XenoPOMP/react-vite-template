import { PropsWith } from '@xenopomp/react-essentials';

import { FC, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  const classContext = useContext(BodyClassnameContext);

  useEffect(() => {
    classContext.registerClasses('theme', [styles.themes, styles.dark]);
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
