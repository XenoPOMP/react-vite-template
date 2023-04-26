import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import { ProviderProps } from '@providers/Provider.props';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<BodyClassnameProvider>
				<SizesProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</SizesProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
