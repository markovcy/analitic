/* eslint-disable react/no-array-index-key */
import React from 'react';

import { themr } from '@upp/chrome/components';

import { types } from '../../utils';

import styles from './Title.module.scss';

interface TitleProps extends types.BaseTitle {
  theme: typeof styles;
}

export const Title = themr((props: TitleProps) => {
  const { title, required, theme } = props;

  if (!title) {
    return null;
  }

  return (
    <h6 className={theme.title}>
      {title}
      {required && <span className={theme.required}>*</span>}
    </h6>
  );
}, styles);
