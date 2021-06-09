import React, { memo, useCallback } from 'react';

import { useAxios } from '@upp/chrome/utils';
import { Button } from '@upp/chrome/components';
import { useGetAction, history } from '@upp/chrome/store';

import styles from './SignIn.module.scss';

export const SignIn = memo(() => {
  const [{ error, loading }, auth] = useAxios(
    {
      method: 'POST',
      url: '/auth/login',
    },
    { manual: true }
  );

  const userActions = useGetAction<'user'>('user');

  const onClickAuth = useCallback(async () => {
    const { data } = await auth({
      data: {
        email: 'natalischuk17@gmail.com',
        password: '1111',
      },
    });

    userActions.save({ user: data });
    history.replace('/');
  }, [auth, userActions]);

  return (
    <section>
      <h4>Auth to your account</h4>

      {loading && loading}
      {error && <p className={styles.error}>{error.message}</p>}

      <Button type="primary" disabled={loading} onClick={onClickAuth}>
        Auth
      </Button>
    </section>
  );
});
