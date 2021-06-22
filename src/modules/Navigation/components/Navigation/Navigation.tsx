import React, { useMemo, useCallback } from 'react';
import { slide } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import cx from 'classnames';

import {
  Icon,
  themr,
  Header,
  Footer,
  ErrorBoundary,
} from '@upp/chrome/components';

import { useGetAction } from '@upp/chrome/store';

import styles from './Navigation.module.scss';

export interface NavigationProps {
  isOpen: boolean;
  theme: typeof styles;
  children: React.ReactElement;
}

const Menu = reduxBurgerMenu(slide);

export const Navigation = themr((props: NavigationProps) => {
  const { theme, isOpen, children } = props;

  const userActions = useGetAction<'user'>('user');

  return (
    <Menu
      right
      noOverlay
      disableAutoFocus
      customBurgerIcon={false}
      crossButtonClassName={theme.crossButton}
      className={cx(theme.menu, { [theme.open]: isOpen })}
      customCrossIcon={<Icon name="close" className={theme.closeIcon} />}
    >
      <Header />
      <ErrorBoundary>
        <main>{children}</main>
      </ErrorBoundary>
      <Footer />
    </Menu>
  );
}, styles);
