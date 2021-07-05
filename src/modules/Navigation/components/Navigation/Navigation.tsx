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

import { useGetState } from '@upp/chrome/store';

import styles from './Navigation.module.scss';

export interface NavigationProps {
  isOpen: boolean;
  theme: typeof styles;
  children: React.ReactElement;
}

const Menu = reduxBurgerMenu(slide);

export const Navigation = themr((props: NavigationProps) => {
  const { theme, isOpen, children } = props;

  const user = useGetState<'user'>('user');

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
      <nav className={theme.nav}>
        <ul className={theme.tabs}>
          <li className={cx(theme.formTab, { [theme.active]: Boolean(user) })}>
            <Icon name="candidate" />
          </li>
          <li className={cx(theme.formTab, { [theme.active]: Boolean(!user) })}>
            <Icon name="settings" />
          </li>
        </ul>
      </nav>

      <div className={theme.content}>
        <Header />
        <ErrorBoundary>
          <main>{children}</main>
        </ErrorBoundary>
        <Footer />
      </div>
    </Menu>
  );
}, styles);
