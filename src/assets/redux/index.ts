import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appSettingsSlice, {
  initialAppSettings,
} from '@redux/reducers/appSettingsSlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
});

/** Cookie name. */
const cookieName = `${initialAppSettings.appName
  .toLowerCase()
  .replace(/\s/gi, '-')}-persisted-store`;

const store = configureStore({
  reducer: rootReducer,
  preloadedState: localStorage.getItem(cookieName)
    ? JSON.parse(localStorage.getItem(cookieName) as string)
    : {},
});

/**
 * Subscribe to update event.
 *
 * Save data to local storage.
 */
store.subscribe(() => {
  localStorage.setItem(cookieName, JSON.stringify(store.getState()));
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
