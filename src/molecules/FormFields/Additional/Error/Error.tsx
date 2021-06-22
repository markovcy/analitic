import React from 'react';

import { themr } from '@upp/chrome/components';

import styles from './Error.module.scss';

interface ErrorProps {
  theme: typeof styles;
  error?: string | null;
}

export const Error = themr((props: ErrorProps) => {
  const { error, theme } = props;

  if (!error) {
    return null;
  }

  return <h6 className={theme.error}>{error}</h6>;
}, styles);
