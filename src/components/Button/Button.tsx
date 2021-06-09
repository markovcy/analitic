import React from 'react';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import styles from './Button.module.scss';

export interface ButtonProps {
  theme: typeof styles;
  children?: React.ReactNode;
  /** Buttons types
   * @default 'default'
   * */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  /** @default false */
  isSecondary?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = themr((props: ButtonProps) => {
  const {
    theme,
    leftIcon,
    children,
    onClick,
    disabled,
    type = 'default',
    isSecondary = false,
  } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      className={cx(theme.button, theme[type], {
        [styles.secondary]: isSecondary,
      })}
      onClick={onClick}
    >
      {leftIcon}
      {children && <span className={theme.title}>{children}</span>}
    </button>
  );
}, styles);
