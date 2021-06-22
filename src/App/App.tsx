import React, { memo, useEffect } from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import createCache, { EmotionCache } from '@emotion/cache';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { CacheProvider } from '@emotion/react';

import { Spinner } from '@upp/chrome/components';
import { configureStore } from '@upp/chrome/store';

import { Layout } from './Layout';

const store = configureStore();
const appId = process.env.REACT_APP_ID;

export const App = memo(() => {
  const [cache, setCache] = React.useState<EmotionCache | null>(null);

  useEffect(() => {
    const root = document.querySelector(`#${appId}`);

    if (root?.shadowRoot) {
      setCache(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        createCache({ key: 'react-select', container: root.shadowRoot })
      );
    }
  }, []);

  return (
    <Provider store={store}>
      {cache ? (
        <CacheProvider value={cache}>
          <Layout />
        </CacheProvider>
      ) : (
        <Spinner />
      )}
    </Provider>
  );
});
