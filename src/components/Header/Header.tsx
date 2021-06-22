import React, { useCallback } from 'react';
import cx from 'classnames';

import { themr, Icon } from '@upp/chrome/components';
import { useGetState, useGetAction } from '@upp/chrome/store';

import styles from './Header.module.scss';

export const Header = themr(() => {
  const user = useGetState<'user'>('user');
  const userActions = useGetAction<'user'>('user');

  const logout = useCallback(() => {
    userActions.remove();
  }, [userActions]);
  console.log(user);

  return (
    <header className={cx(styles.header, { [styles.withUser]: Boolean(user) })}>
      <Icon
        name="logo"
        theme={{ icon: cx(styles.logo, { [styles.withUser]: Boolean(user) }) }}
      />

      {user && <h4 className={styles.title}>Hello, {user.name}</h4>}
      {user && (
        <Icon name="logout" theme={{ icon: styles.logout }} onClick={logout} />
      )}
    </header>
  );
}, styles);
