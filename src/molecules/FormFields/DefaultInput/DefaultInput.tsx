import React, { useRef, useEffect, useState, useCallback } from 'react';
import cx from 'classnames';

import { Icon, themr } from '@upp/chrome/components';

import { types, BaseField } from '../utils';
import { Input, InputProps } from '../Input';

import styles from './DefaultInput.module.scss';

export interface DefaultInputProps
  extends types.DefaultField,
    Pick<
      InputProps,
      'onClick' | 'onBlur' | 'onFocus' | 'onKeyDown' | 'children'
    >,
    BaseField<string> {
  theme: typeof styles;
  onBlur?(): void;
}

export const DefaultInput = themr((props: DefaultInputProps) => {
  const {
    name,
    theme,
    error,
    disabled,
    readOnly,
    iconName,
    required,
    onChange,
    ...otherProps
  } = props;

  const [value, setValue] = useState(props.value || '');

  const firstRender = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setValue(value);
      onChange?.(value.trim());
    },
    [onChange]
  );

  const onAccept = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const onClearValue = useCallback(() => {
    setValue('');
    onChange?.('');
  }, [onChange]);

  useEffect(() => {
    firstRender.current = true;
  }, []);

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  return (
    <Input
      {...otherProps}
      inputRef={inputRef}
      name={name}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      error={error}
      theme={{
        title: theme.title,
        container: theme.container,
        inputWrapper: theme.inputWrapper,
        input: cx(theme.input, {
          [theme.error]: Boolean(error),
          [theme.inputWithIcon]: Boolean(iconName),
        }),
      }}
      onAccept={onAccept}
      onChange={handleChange}
    >
      {iconName && <Icon name={iconName} className={theme.icon} />}
      {!disabled && !readOnly && (
        <Icon
          name="close"
          className={cx(theme.icon, theme.iconCross, {
            [theme.iconCrossRight]: Boolean(iconName),
            [theme.show]: firstRender.current && value.length !== 0,
            [theme.hidden]: firstRender.current && value.length === 0,
          })}
          onClick={onClearValue}
        />
      )}
    </Input>
  );
}, styles);
