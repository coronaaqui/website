import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { eventsReducer } from './services/events';
import { apiMiddleware } from './middlewares/api';
import { filtersMiddleware } from './middlewares/filters';
import { requestsReducer } from '../helpers/redux/requests';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  eventsReducer,
  requestsReducer,
});

const devToolsShouldLoad =
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' &&
  process.env.ENV !== 'production';

export function createApplicationStore(reducers, middleware, initialData = {}) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    devToolsShouldLoad ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )(createStore);

  const store = createStoreWithMiddleware(reducers, initialData);

  return store;
}

export function configureStore() {
  const middlewares = [
    thunkMiddleware,
    filtersMiddleware,
    apiMiddleware() /* , loggerMiddleware */,
  ];
  const store = createApplicationStore(rootReducer, middlewares, {}); // We can pass initial data to be laoded into the region here

  return store;
}
