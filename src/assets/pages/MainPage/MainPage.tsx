import cn from 'classnames';

import Page from '@components/Page/Page';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<Page
			meta={{
				pageTitle: 'Main',
				pageDescription: 'Some description',
				keywords: '',
			}}
		></Page>
	);
};

export default MainPage;
