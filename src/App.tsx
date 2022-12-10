import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/pages/MainPage/MainPage';
import NotFound from './assets/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
