import React from 'react';

import { themr } from '@upp/chrome/components';

import styles from './Spinner.module.scss';

export interface SpinnerProps {
  theme: typeof styles;
  kind?: 'circle';
}

export const Spinner = themr((props: SpinnerProps) => {
  const { theme, kind = 'circle' } = props;

  switch (kind) {
    case 'circle':
      return (
        <svg viewBox="0 0 22 22" className={theme.circle}>
          <circle
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            cx="11"
            cy="11"
            r="10"
          />
        </svg>
      );

    default:
      return null;
  }
}, styles);
