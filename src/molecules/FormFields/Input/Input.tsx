import React, { useMemo, useCallback, RefObject } from 'react';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { Error, Title, DefaultValue } from '../Additional';

import { types } from '../utils';

import styles from './Input.module.scss';

export interface InputProps extends Omit<types.BaseInput, 'value'> {
  theme: typeof styles;
  onAccept(value: string): void;
  title?: string;
  error?: string | null;
  defaultValue?: string;
  value?: string | string[];
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
    value,
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

  const input = useMemo(() => {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) {
      return null;
    }

    if (Array.isArray(value)) {
      const [first, ...otherValues] = value;

      const inputs = [
        <input
          {...otherProps}
          key={-1}
          ref={inputRef}
          name={name}
          value={first}
          className={theme.input}
          placeholder={placeholder || `${title}...`}
          onChange={handleChange}
        />,
      ];

      otherValues?.forEach((v, i) => {
        inputs.push(
          <input
            {...otherProps}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            value={v}
            name={name}
            tabIndex={-1}
            className={theme.inputHidden}
            onChange={handleChange}
          />
        );
      });

      return inputs;
    }

    return (
      <input
        {...otherProps}
        ref={inputRef}
        name={name}
        readOnly={name === 'linkedin'}
        value={value}
        className={theme.input}
        placeholder={placeholder || `${title}...`}
        onChange={handleChange}
      />
    );
  }, [
    value,
    otherProps,
    inputRef,
    name,
    theme.input,
    theme.inputHidden,
    placeholder,
    title,
    handleChange,
  ]);

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
        value={defaultValue === value ? undefined : defaultValue}
        onAccept={onAccept}
      />

      <Error theme={{ error: theme.error }} error={error} />
    </label>
  );
}, styles);
