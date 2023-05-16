import { FC } from 'react';
// @ts-ignore
import DocumentMeta from 'react-document-meta';

import { MetaInfo } from './MetaInfo';

/**
 * Document meta component.
 *
 * Adds meta tags like page-title etc. to the <head/>.
 *
 * @param {string} pageTitle                  title of page.
 * @param {string} [pageDescription]					description of page.
 * @param {string} keywords										keywords of page.
 * @constructor
 */
const MetaTitle: FC<MetaInfo> = ({ pageTitle, pageDescription, keywords }) => {
	const meta = {
		title: pageTitle,
		description: pageDescription,
		meta: {
			charset: 'utf-8',
			name: {
				keywords: keywords,
			},
		},
	};

	return <DocumentMeta {...meta}></DocumentMeta>;
};

export default MetaTitle;
