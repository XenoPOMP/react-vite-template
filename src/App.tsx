import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';

import AppRoutes from './AppRoutes';

function App() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;
