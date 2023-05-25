import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type AppSettings = {
	appVersion: string;
	appName: string;
};

const initialState: AppSettings = {
	appVersion: '0.01',
	appName: 'React Vite Application',
};

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		simpleAction(state, action: ReduxAction<any>) {},
	},
});

export default appSettingsSlice.reducer;
export const { simpleAction } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
