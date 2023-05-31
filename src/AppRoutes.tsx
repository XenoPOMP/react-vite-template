import { AnimatePresence } from 'framer-motion';
import React, { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import TestingPage from '@pages/TestingPage/TestingPage';

/**
 * Root component of application routes.
 *
 * @param {boolean} pageTransitions      determines whether animated page
 *                                       transitions will be enabled.
 * @constructor
 */
const AppRoutes: FC<{
	pageTransitions?: boolean;
}> = ({ pageTransitions }) => {
	const location = useLocation();

	/**
	 * This component contains all application routes.
	 *
	 * Add new routes here.
	 *
	 * @constructor
	 */
	const RoutesNode: FC<unknown> = () => {
		return (
			<Routes location={location} key={location.pathname}>
				<Route path={'*'} element={<NotFound />} />

				<Route path={'/'} element={<MainPage />} />

				<Route path={'/test'} element={<TestingPage />} />
			</Routes>
		);
	};

	return pageTransitions ? (
		<AnimatePresence>
			<RoutesNode />
		</AnimatePresence>
	) : (
		<RoutesNode />
	);
};

export default AppRoutes;
