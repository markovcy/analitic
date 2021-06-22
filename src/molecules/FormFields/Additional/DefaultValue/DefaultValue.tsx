import React, { useCallback } from 'react';

import { themr } from '@upp/chrome/components';

import styles from './DefaultValue.module.scss';

interface DefaultValueProps {
  theme: typeof styles;
  onAccept(value: string): void;
  value?: string;
}

export const DefaultValue = themr((props: DefaultValueProps) => {
  const { value, onAccept, theme } = props;

  const handleAccept = useCallback(() => {
    if (value) {
      onAccept(value);
    }
  }, [onAccept, value]);

  if (!value) {
    return null;
  }

  return (
    <h6 className={theme.title}>
      <span className={theme.update}>Update to</span>
      <button type="button" className={theme.value} onClick={handleAccept}>
        [{value}]
      </button>
    </h6>
  );
}, styles);
