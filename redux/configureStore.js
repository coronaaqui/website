import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { eventsReducer } from './services/events/events.reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  eventsReducer
});

const devToolsShouldLoad =
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' &&
  process.env.ENV !== 'production';

export function createApplicationStore(reducers, middleware, initialData = {}) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    devToolsShouldLoad ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )(createStore);

  const store = createStoreWithMiddleware(reducers, initialData);

  return store;
}

export function configureStore() {
  const middlewares = [thunkMiddleware, loggerMiddleware];

  const store = createApplicationStore(rootReducer, middlewares, {}); // We can pass initial data to be laoded into the state here

  return store;
}
