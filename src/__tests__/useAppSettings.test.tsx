import { describe, expect, test } from 'vitest';

import TestingPage from '@pages/TestingPage/TestingPage';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

/**
 * Test useAppSettings hook.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('useAppSettings hook', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(<TestingPage />, {
				useRedux: true,
			})
		).toMatchSnapshot();
	});

	test('Version render', () => {
		const text = renderWithProviders(<TestingPage />, {
			useRedux: true,
		}).asFragment().textContent;

		expect(/(\d\.\d\d)|(\d.\d\d\.\d)/i.test(text !== null ? text : '')).toBe(
			true
		);
	});
});
