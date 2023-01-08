import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './main.scss'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@redux/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
