import cn from 'classnames';

import Page from '@components/Page/Page';

import styles from './MainPage.module.scss';
import SplashScreen from '@components/SplashScreen/SplashScreen';
import UiContainer from '@ui/UiContainer/UiContainer';

const MainPage = () => {
  return (
    <Page
      meta={{
        title: 'Main',
        description: 'Some description',
        keywords: '',
      }}
    >
      <UiContainer>1</UiContainer>
    </Page>
  );
};

export default MainPage;
