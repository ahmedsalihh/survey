import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    storeEnhancers.push(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  }

  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}
