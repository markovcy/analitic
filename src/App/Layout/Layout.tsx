import React, { memo } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '@upp/chrome/store';
import { CandidateForm } from '@upp/chrome/pages';
import {
  AuthContainer,
  NavigationButton,
  NavigationContainer,
} from '@upp/chrome/modules';
import { ErrorBoundary } from '@upp/chrome/components';

export const Layout = memo(() => {
  return (
    <ConnectedRouter history={history}>
      <NavigationButton />

      <ErrorBoundary>
        <NavigationContainer>
          <AuthContainer>
            <CandidateForm />
          </AuthContainer>
        </NavigationContainer>
      </ErrorBoundary>
    </ConnectedRouter>
  );
});
