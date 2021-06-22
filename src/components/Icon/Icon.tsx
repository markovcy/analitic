import React, { useMemo } from 'react';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { icons, IconsType } from './icons';
import styles from './Icon.module.scss';

interface IconProps {
  theme: typeof styles;
  name: IconsType;
  size?: number;
  disabled?: string;
  className?: string;
  onClick?(): void;
}

export const Icon = themr((props: IconProps) => {
  const { name, theme, className, disabled, onClick } = props;

  const ComponentIcon = useMemo(() => icons[name], [name]);

  const style = useMemo(() => {
    if (!props.size) {
      return undefined;
    }

    const newSize = `${props.size}px`;
    return {
      width: newSize,
      height: newSize,
    };
  }, [props.size]);

  return (
    <ComponentIcon
      style={style}
      className={cx(className, theme.icon, { [theme.disabled]: disabled })}
      onClick={disabled ? undefined : onClick}
    />
  );
}, styles);
