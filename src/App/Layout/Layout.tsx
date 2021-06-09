import React, { memo, useMemo, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '@upp/chrome/store';
import { AuthContainer } from '@upp/chrome/modules';
import {
  NotFound,
  ExtensionWrapper,
  CandidateForm,
} from '@upp/chrome/components';

const routes = [
  {
    path: '/',
    component: ExtensionWrapper,
  },
];

export const Layout = memo(() => {
  return (
    <ConnectedRouter history={history}>
      <AuthContainer>
        <Switch>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={NotFound} />
          <CandidateForm />
        </Switch>
      </AuthContainer>
    </ConnectedRouter>
  );
});
