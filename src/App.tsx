import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import HookTestingPage from '@pages/Testing/HookTesting/HookTestingPage';
import ReduxTestingPage from '@pages/Testing/ReduxTesting/ReduxTestingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<MainPage />} />

        <Route path={'/testing'}>
          <Route path={'hooks'} element={<HookTestingPage />} />

          <Route path={'redux'} element={<ReduxTestingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
