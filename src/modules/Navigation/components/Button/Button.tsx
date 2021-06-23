import React, { useCallback } from 'react';
import cx from 'classnames';

import { Icon, themr } from '@upp/chrome/components';
import { useGetState, useGetAction } from '@upp/chrome/store';

import styles from './Button.module.scss';

interface ButtonProps {
  theme: typeof styles;
}

export const Button = themr((props: ButtonProps) => {
  const { theme } = props;

  const user = useGetState<'user'>('user');
  const { candidate } = useGetState<'form'>('form');
  const { isOpen } = useGetState<'burgerMenu'>('burgerMenu');
  const toggleMenu = useGetAction<'toggleMenu'>('toggleMenu');

  const onChangeNavigationState = useCallback(() => {
    toggleMenu(!isOpen);
  }, [isOpen, toggleMenu]);

  return (
    <button
      type="button"
      className={cx(theme.button, {
        [theme.opened]: isOpen,
        [theme.notAuth]: !user?.id,
        [theme.candidate]: Boolean(candidate?.values),
      })}
      onClick={onChangeNavigationState}
    >
      <Icon name="button-navigation" className={theme.icon} />
    </button>
  );
}, styles);