import React, { memo, useState, useEffect, useCallback } from 'react';

import { useGetAction, useGetState } from '@upp/chrome/store';
import { ErrorBoundary, Spinner } from '@upp/chrome/components';
import { storage } from '@upp/chrome/utils';

import { USER } from '../../redux/actions';
import { SignIn } from '../../components';

interface AuthContainerProps {
  children: React.ReactElement;
}

export const AuthContainer = memo((props: AuthContainerProps) => {
  const { children } = props;

  const user = useGetState<'user'>('user');
  const userActions = useGetAction<'user'>('user');

  const [loading, setLoading] = useState(true);

  const getInitUser = useCallback(async () => {
    try {
      const initUser = await storage.get(USER.id);
      const parsedUser = initUser && JSON.parse(initUser);

      if (parsedUser && parsedUser.id) {
        userActions.init({ user: parsedUser });
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}

    setLoading(false);
  }, [userActions]);

  useEffect(() => {
    if (!user) {
      getInitUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <SignIn />;
  }

  return <ErrorBoundary>{children}</ErrorBoundary>;
});
