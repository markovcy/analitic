import React, { useMemo, useCallback, RefObject } from 'react';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { Error, Title, DefaultValue } from '../Additional';

import { types } from '../utils';

import styles from './Input.module.scss';

export interface InputProps extends types.BaseInput {
  theme: typeof styles;
  onAccept(value: string): void;
  title?: string;
  error?: string | null;
  defaultValue?: string;
  children?: React.ReactNode;
  inputRef?: RefObject<HTMLInputElement>;
  onBlur?(args: unknown): void;
  onFocus?(args: unknown): void;
  onClick?(args: unknown): void;
  onChange?(args: unknown): void;
  onKeyDown?(args: unknown): void;
}

export const Input = themr((props: InputProps) => {
  const {
    name,
    error,
    title,
    theme,
    inputRef,
    children,
    required,
    placeholder,
    defaultValue,
    onClick,
    onAccept,
    onChange,
    ...otherProps
  } = props;

  const handleChange = useCallback((e) => onChange?.(e), [onChange]);

  const input = useMemo(
    () => (
      <input
        {...otherProps}
        ref={inputRef}
        name={name}
        className={theme.input}
        placeholder={placeholder || `${title}...`}
        onChange={handleChange}
      />
    ),
    [inputRef, name, otherProps, placeholder, title, theme.input, handleChange]
  );

  return (
    <label
      className={cx(theme.container, { [theme.disabled]: otherProps.disabled })}
      onClick={onClick}
    >
      {title && (
        <Title
          theme={{ title: theme.title, required: theme.required }}
          title={title}
          required={required}
        />
      )}

      {children ? (
        <span className={theme.inputWrapper}>
          {input}
          {children}
        </span>
      ) : (
        input
      )}

      <DefaultValue
        value={defaultValue === otherProps.value ? undefined : defaultValue}
        onAccept={onAccept}
      />

      <Error theme={{ error: theme.error }} error={error} />
    </label>
  );
}, styles);
