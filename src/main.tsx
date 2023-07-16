import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@redux/index';

import App from './App';
import './main.scss';
import SplashScreen from '@components/SplashScreen/SplashScreen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
