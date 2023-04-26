import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import { ProviderProps } from '@providers/Provider.props';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<BodyClassnameProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
