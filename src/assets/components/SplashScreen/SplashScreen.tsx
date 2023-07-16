import cn from 'classnames';
import { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './SplashScreen.module.scss';
import type { SplashScreenProps } from './SplashScreen.props';
import Loader from '@ui/Loader/Loader';

const SplashScreen: FC<SplashScreenProps> = ({}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        pointerEvents: 'none',
      }}
      animate={{
        opacity: 1,
        pointerEvents: 'all',
      }}
      exit={{
        opacity: 0,
        pointerEvents: 'none',
      }}
      className={cn(styles.splashScreen)}
    >
      <Loader type={'circle'} mainColor={'black'} />
    </motion.div>
  );
};

export default SplashScreen;
