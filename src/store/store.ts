/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, createStore, Store } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as types from './types';
import rootReducer from './reducers';
import { asyncFormMiddleware } from './asyncFormSubmit';

export const history = createBrowserHistory();

// eslint-disable-next-line import/no-mutable-exports
export let store: Store<types.State>;

// eslint-disable-next-line import/no-mutable-exports
export let baseStore: any;

export const configureStore = (initialState = {}) => {
  // Create store
  store = (createStore(
    rootReducer(history),
    initialState as any,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), asyncFormMiddleware)
    )
  ) as unknown) as Store;

  return store;
};
