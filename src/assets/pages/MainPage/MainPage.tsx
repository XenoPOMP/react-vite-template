import cn from 'classnames';
import { useState } from 'react';

import Page from '@components/Page/Page';

import CheckBox from '@ui/CheckBox/CheckBox';
import Radio from '@ui/Radio/Radio';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const [checked, setChecked] = useState<boolean>(false);

	return (
		<Page
			meta={{
				pageTitle: 'Main',
				pageDescription: 'Some description',
				keywords: '',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					rowGap: '.25em',
				}}
			>
				<CheckBox checked={checked} onClick={state => setChecked(state)}>
					Usual
				</CheckBox>

				<Radio name={'gender'}>Male</Radio>
				<Radio name={'gender'}>Female</Radio>
			</div>
		</Page>
	);
};

export default MainPage;
