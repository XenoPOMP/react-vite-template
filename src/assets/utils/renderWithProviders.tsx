import { RenderResult, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import store from '@redux/index';

/**
 * Render options for Vitest DOM wrapping
 */
export interface RenderOptions {
  useRedux?: boolean;
  useRouter?: boolean;
  useQuery?: boolean;
}

/**
 * Type for UI wrapper.
 */
type Wrapper = (ui: JSX.Element) => JSX.Element;

/**
 * Wraps UI in Redux store.
 * @param {JSX.Element} ui     wrapping UI
 * @returns {JSX.Element}      wrapped UI
 */
const wrapInRedux: Wrapper = ui => {
  return <ReduxProvider store={store}>{ui}</ReduxProvider>;
};

/**
 * Wraps UI in Router.
 * @param {JSX.Element} ui     wrapping UI
 * @returns {JSX.Element}      wrapped UI
 */
const wrapInRouter: Wrapper = ui => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={ui} />
      </Routes>
    </Router>
  );
};

/**
 * Wraps UI in React Query.
 * @param {JSX.Element} ui     wrapping UI
 * @returns {JSX.Element}      wrapped UI
 */
const wrapInReactQuery: Wrapper = ui => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        // refetchInterval: 5000
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>;
};

/**
 * Renders JSX wrapped in providers.
 * @param {JSX.Element} ui
 * @param options
 * @returns {RenderResult}
 */
const renderWithProviders = (ui: JSX.Element, options?: RenderOptions) => {
  const renderOptions: RenderOptions = {
    useRedux: false,
    useRouter: false,
    useQuery: false,
    ...options,
  };
  let renderUi: JSX.Element = ui;

  if (renderOptions.useRedux) {
    renderUi = wrapInRedux(renderUi);
  }

  if (renderOptions.useRouter) {
    renderUi = wrapInRouter(renderUi);
  }

  if (renderOptions.useQuery) {
    renderUi = wrapInReactQuery(renderUi);
  }

  return render(renderUi);
};

export default renderWithProviders;
