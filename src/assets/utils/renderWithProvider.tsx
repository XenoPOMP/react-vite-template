import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@redux/index';
import { render } from '@testing-library/react';

const renderWithProvider = (ui: JSX.Element) => {
  return render(<ReduxProvider store={store}>{ui}</ReduxProvider>);
};

export default renderWithProvider;
