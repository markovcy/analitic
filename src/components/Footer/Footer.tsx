import React from 'react';
import { format } from 'date-fns';

import { themr } from '@upp/chrome/components';

import styles from './Footer.module.scss';

const currentYear = format(new Date(), 'yyyy');
const appVersion = process.env.REACT_APP_VERSION;

export const Footer = themr(() => {
  return (
    <footer>
      <h6 className={styles.appVersion}>v{appVersion}</h6>
      <h5 className={styles.copyright}>Copyright © {currentYear}</h5>
    </footer>
  );
}, styles);
