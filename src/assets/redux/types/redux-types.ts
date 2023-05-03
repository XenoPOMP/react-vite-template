import { AppSettings } from '@redux/reducers/appSettingsSlice';

/**
 * Redux store interface.
 */
interface IStore {
	appSettings: AppSettings;
}

/**
 * Type for Redux action.
 *
 * A generic is payload type.
 */
export type ReduxAction<A> = {
	payload: A;
	type: string;
};

export default IStore;
