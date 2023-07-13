import cn from 'classnames';

import Page from '@components/Page/Page';

import styles from './MainPage.module.scss';
import SplashScreen from '@components/SplashScreen/SplashScreen';

const MainPage = () => {
  return (
    <Page
      meta={{
        title: 'Main',
        description: 'Some description',
        keywords: '',
      }}
    ></Page>
  );
};

export default MainPage;
