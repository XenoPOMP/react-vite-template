import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import UiContainer from '@ui/UiContainer/UiContainer';
import UiGrid from '@ui/UiGrid/UiGrid';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('UI container', () => {
	test('Match snapshot', () => {
		expect(render(<UiContainer>Container</UiContainer>)).toMatchSnapshot();

		expect(render(<UiGrid>Container</UiGrid>)).toMatchSnapshot();
	});
});
