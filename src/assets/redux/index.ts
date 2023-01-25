import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from '@redux/reducers/toolkitSlice';

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
