import TestingPage from '@pages/TestingPage/TestingPage';

import renderWithProviders from '@utils/renderWithProviders';

export const defaultTestingPageRender = () => {
  return renderWithProviders(<TestingPage />, {
    useRedux: true,
  });
};
