import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={'*'} element={<NotFound />} />

			<Route path={'/'} element={<MainPage />} />
		</Routes>
	);
};

export default AppRoutes;
