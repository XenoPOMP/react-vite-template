import { FC, PropsWithChildren, ReactNode } from 'react';
import Helmet from 'react-helmet';

import Layout from '@components/Layout/Layout';

import useAppSettings from '@hooks/useAppSettings';

import { MetaInfo } from '@type/MetaInfo';
import { PropsWith } from '@type/PropsWith';

import { PageProps } from './Page.props';

/**
 * Component that provides page implementation.
 * Meta tag optimization included.
 *
 * @param {MetaInfo} meta            page meta info.
 * @param {ReactNode} children       page children component.
 * @constructor
 */
const Page: FC<PropsWith<'children', PageProps>> = ({
  meta,
  children,
  noIndex,
}) => {
  const { appName } = useAppSettings();

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{meta.title}</title>
        <meta name={'description'} content={meta.description} />
        <meta name={'keywords'} content={meta.keywords} />
        <meta name={'apple-mobile-web-app-title'} content={appName.get()} />

        {noIndex && <meta name={'robots'} content={'noindex'} />}
      </Helmet>

      {children}
    </Layout>
  );
};

export default Page;
