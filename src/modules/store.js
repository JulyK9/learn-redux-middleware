import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import myLogger from '../middlewares/myLogger';

export const store = createStore(rootReducer, applyMiddleware(myLogger));
