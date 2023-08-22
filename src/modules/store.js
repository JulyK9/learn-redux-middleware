import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';
// import myLogger from '../middlewares/myLogger';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  // applyMiddleware(myLogger, logger)
  composeWithDevTools(applyMiddleware(logger))
);
