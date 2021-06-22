import React, { memo, useState, useCallback, useMemo } from 'react';

import { useAxios } from '@upp/chrome/utils';
import { useGetAction } from '@upp/chrome/store';
import { FormFields } from '@upp/chrome/molecules';
import { FormContainer } from '@upp/chrome/modules';

import styles from './SignIn.module.scss';

export const SignIn = memo(() => {
  const [{ error, loading }, auth] = useAxios(
    {
      method: 'POST',
      url: '/auth/login',
    },
    { manual: true }
  );

  const [notAuth, setNotAuth] = useState(false);
  const userActions = useGetAction<'user'>('user');

  const onAuth = useCallback(
    async (formData) => {
      setNotAuth(false);
      // debugger;

      const { data } = await auth({
        data: formData,
      });

      if (data) {
        userActions.save({ user: data });
      } else {
        setNotAuth(true);
      }
    },
    [auth, userActions]
  );

  const fields: FormFields.types.Field[] = useMemo(
    () => [
      {
        name: 'email',
        required: true,
        title: 'Please enter your e-mail',
        type: FormFields.types.TypeField.Email,
      },
      {
        required: true,
        name: 'password',
        title: 'Your password',
        type: FormFields.types.TypeField.Password,
      },
    ],
    []
  );

  return (
    <section className={styles.signIn}>
      <FormContainer
        data={fields}
        loading={loading}
        title="Auth to your account"
        titleSubmitButton="Sign in"
        theme={{ form: styles.form }}
        error={
          notAuth ? 'The username or password is incorrect' : error?.message
        }
        onSubmit={onAuth}
      />
    </section>
  );
});
