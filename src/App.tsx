import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
