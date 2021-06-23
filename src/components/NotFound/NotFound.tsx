import React, { memo } from 'react';

import { Icon } from '@upp/chrome/components';

import styles from './NotFound.module.scss';

export const NotFound = memo(() => {
  return (
    <>
      <Icon theme={{ icon: styles.icon }} name="error-404" />
      <h1 className={styles.title}>Ooops!</h1>
      <p className={styles.description}>
        Sorry about that, but he page you are looking for just disappear... dark
        magic?
      </p>
    </>
  );
});
