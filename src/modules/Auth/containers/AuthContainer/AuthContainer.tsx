import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useGetState, history } from '@upp/chrome/store';

import { SignIn } from '../../components';

interface AuthContainerProps {
  children: React.ReactElement;
}

export const AuthContainer = memo((props: AuthContainerProps) => {
  const { children } = props;

  const user = useGetState<'user'>('user');

  if (!user) {
    return (
      <>
        <Route component={SignIn} path="/signin" exact />
        <Redirect to="/signin" />
      </>
    );
  }

  return children;
});
