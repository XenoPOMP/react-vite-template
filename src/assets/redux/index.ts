import { combineReducers, createStore } from 'redux';
import { sampleReducer } from './reducer-list';

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export const store = createStore(rootReducer);
