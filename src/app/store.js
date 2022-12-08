import { createStore } from 'redux';
import rootReducer from '../features/reducer';

export const store = createStore(rootReducer);

