import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getPersistConfig } from 'redux-deep-persist';

import appSettingsSlice, {
  initialAppSettings,
} from '@redux/reducers/appSettingsSlice';

/**
 * App`s root reducer.
 */
const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
});

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: ['appSettings'],
  blacklist: ['appSettings.appVersion', 'appSettings.appName'],
  rootReducer,
});

/** Persisted reducer. All data changes will be saved in local storage. */
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// /**
//  * Subscribe to update event.
//  *
//  * Save data to local storage.
//  */
// store.subscribe(() => {
//   localStorage.setItem(cookieName, JSON.stringify(store.getState()));
// });

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
