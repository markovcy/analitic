import React, { memo } from 'react';

import { Icon } from '@upp/chrome/components';

import styles from './NotFound.module.scss';

export const NotFound = memo(() => {
  return (
    <>
      {/* <Icon theme={{ icon: styles.icon }} name="error-404" /> */}
      <h1 className={styles.title}>Ooops!</h1>
      <p className={styles.description}>
        This extension works only on profile pages
      </p>
    </>
  );
});
