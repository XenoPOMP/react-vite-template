import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import HookTestingPage from '@pages/HookTesting/HookTestingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<MainPage />} />

        <Route path={'/testing'}>
          <Route path={'hooks'} element={<HookTestingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
