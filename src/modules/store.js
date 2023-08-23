import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';
// import myLogger from '../middlewares/myLogger';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  // applyMiddleware(myLogger, logger)
  // logger를 사용할 경우 logger가 가장 마지막에 와야함
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
  //
);
