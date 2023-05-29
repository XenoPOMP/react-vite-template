import cn from 'classnames';
import { useState } from 'react';

import Page from '@components/Page/Page';

import CheckBox from '@ui/CheckBox/CheckBox';
import Option from '@ui/Option/Option';
import Radio from '@ui/Radio/Radio';
import Select from '@ui/Select/Select';

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

				<Select>
					<Option>Some large option</Option>
					<Option>Some large option 2</Option>
				</Select>
			</div>
		</Page>
	);
};

export default MainPage;
