import React from 'react';

import Page from '@components/Page/Page';

const NotFound = () => {
  return (
    <Page meta={{ title: '404', description: '', keywords: '' }} noIndex>
      Error 404: page not found
    </Page>
  );
};

export default NotFound;
