import { FC, PropsWithChildren } from 'react';

import Layout from '@components/Layout/Layout';
import { MetaInfo } from '@components/MetaTitle/MetaInfo';
import MetaTitle from '@components/MetaTitle/MetaTitle';

import { PageProps } from './Page.props';

/**
 * Page component.
 *
 * Includes meta info to layout.
 *
 * @param {MetaInfo} meta        {@link MetaInfo}
 * @param children
 * @constructor
 */
const Page: FC<PropsWithChildren<PageProps>> = ({ meta, children }) => {
	return (
		<Layout>
			<MetaTitle {...meta} />
			{children}
		</Layout>
	);
};

export default Page;
