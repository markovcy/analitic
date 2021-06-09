import React, { memo } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '@upp/chrome/store';

import { Layout } from './Layout';

import './App.scss';

const store = configureStore();

export const App = memo(() => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
});
