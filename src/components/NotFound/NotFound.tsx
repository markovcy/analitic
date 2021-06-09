import React, { memo } from 'react';

import styles from './NotFound.module.scss';

export const NotFound = memo(() => {
  return (
    <>
      <h1 className={styles.title}>Ooops 404!</h1>
      <p className={styles.description}>
        Sorry about that, but he page you are looking for just disappear... bad
        magic?
      </p>
    </>
  );
});
