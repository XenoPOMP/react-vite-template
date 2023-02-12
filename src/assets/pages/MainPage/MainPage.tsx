import Page from '@components/Page/Page';
import { useQuery } from 'react-query';
import { BitcoinCurrencyService } from '@services/BitcoinCurrency.service';

const MainPage = () => {
  const { isLoading, data, error } = useQuery('bitcoin currency', () =>
    BitcoinCurrencyService.getBitcoinCurrency(),
  );

  return (
    <Page
      meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}
    ></Page>
  );
};

export default MainPage;
