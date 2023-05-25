import { FC, PropsWithChildren, ReactNode } from 'react';
import Helmet from 'react-helmet';

import Layout from '@components/Layout/Layout';

import useAppSettings from '@hooks/useAppSettings';

import { PageProps } from './Page.props';
import type { MetaInfo } from './Page.props';

/**
 * Component that provides page implementation.
 * Meta tag optimization included.
 *
 * @param {MetaInfo} meta            page meta info.
 * @param {ReactNode} children       page children component.
 * @constructor
 */
const Page: FC<PropsWithChildren<PageProps>> = ({ meta, children }) => {
	const { appName } = useAppSettings();

	return (
		<Layout>
			<Helmet
				htmlAttributes={{
					lang: 'en',
				}}
			>
				<title>{meta.pageTitle}</title>
				<meta name={'description'} content={meta.pageDescription} />
				<meta name={'keywords'} content={meta.keywords} />
				<meta name={'apple-mobile-web-app-title'} content={appName.get()} />
			</Helmet>

			{children}
		</Layout>
	);
};

export default Page;
