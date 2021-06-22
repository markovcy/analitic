import React, { memo } from 'react';

import { useGetState } from '@upp/chrome/store';

import { Navigation, NavigationProps } from '../../components';

export type NavigationContainerProps = Pick<NavigationProps, 'children'>;

export const NavigationContainer = memo((props: NavigationContainerProps) => {
  const { children, ...others } = props;

  const { isOpen } = useGetState<'burgerMenu'>('burgerMenu');

  return (
    <Navigation isOpen={isOpen} {...others}>
      {children}
    </Navigation>
  );
});
