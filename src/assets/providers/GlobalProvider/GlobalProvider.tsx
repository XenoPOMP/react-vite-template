import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import SaversProvider from '@providers/savers/SaversProvider/SaversProvider';

import { PropsWith } from '@type/PropsWith';

const GlobalProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
	return (
		<>
			<BodyClassnameProvider>
				<SizesProvider>
					<ThemeProvider>
						<SaversProvider>{children}</SaversProvider>
					</ThemeProvider>
				</SizesProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
