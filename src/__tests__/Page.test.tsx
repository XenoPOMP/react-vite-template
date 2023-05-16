import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Page from '@components/Page/Page';

import skipTestCondition from '@utils/skipTestCondition';

/**
 * Test Page component.
 */

describe.skipIf(skipTestCondition('FRONTEND'))('Page component', () => {
	test('Child render', () => {
		render(
			<Page meta={{ pageTitle: 'Testing', pageDescription: '', keywords: '' }}>
				<h1>Main page testing</h1>
			</Page>
		);

		expect(screen.getByText(/Main page testing/i)).toBeDefined();
	});
});
