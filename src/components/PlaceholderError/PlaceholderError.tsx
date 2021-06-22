import React from 'react';

import { themr, Icon } from '@upp/chrome/components';

import styles from './PlaceholderError.module.scss';

interface PlaceholderErrorProps {
  theme: typeof styles;
  title: string;
  description: string;
}

export const PlaceholderError = themr((props: PlaceholderErrorProps) => {
  const { theme, title, description } = props;

  return (
    <div className={theme.placeholder}>
      <Icon name="error" className={theme.icon} />
      <h3 className={theme.title}>{title}</h3>
      <h5 className={theme.description}>{description}</h5>
    </div>
  );
}, styles);
