import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
// import myLogger from '../middlewares/myLogger';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  // applyMiddleware(myLogger, logger)
  applyMiddleware(logger)
);
