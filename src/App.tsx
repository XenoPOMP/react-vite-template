import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes pageTransitions={true} />
    </Router>
  );
}

export default App;
