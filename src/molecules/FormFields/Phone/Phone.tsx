import React, { useMemo, useEffect, useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { Hidden } from '../Hidden';
import { types, BaseField } from '../utils';
import { Title, Error, DefaultValue } from '../Additional';

import styles from './Phone.module.scss';

interface PhoneProps extends Omit<types.Tel, 'type'>, BaseField {
  theme: typeof styles;
  pattern?: string;
}

export const Phone = themr((props: PhoneProps) => {
  const {
    name,
    value,
    readOnly,
    disabled,
    theme,
    title,
    pattern,
    error,
    required,
    defaultValue,
    onBlur,
    onChange,
    ...others
  } = props;

  const [phone, setPhone] = useState<string>(value || '');
  const [countryCode, setCountryCode] = useState<string>();

  const inputProps = useMemo(
    () => ({
      required,
      readOnly,
      disabled,
      name:
        countryCode &&
        countryCode.length < phone.length &&
        phone.replace(countryCode, '').length !== 0
          ? name
          : undefined,
    }),
    [countryCode, disabled, name, phone, readOnly, required]
  );

  const onChangePhone = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (newPhone: string, data?: any) => {
      setPhone(newPhone);
      setCountryCode(data?.dialCode);
      onChange?.(newPhone);
    },
    [onChange]
  );

  const isEqualValues = useMemo(
    () =>
      defaultValue?.replace(/[-+)( ]+/gm, '') ===
      phone?.replace(/[-+)( ]+/gm, ''),
    [defaultValue, phone]
  );

  useEffect(() => {
    setPhone(value || '');
  }, [value]);

  const regPattern = pattern && new RegExp(pattern.replace(/\\\\/g, '\\'));

  return (
    <label className={styles.phone}>
      <Title title={title} required={required} />

      <PhoneInput
        prefix="+"
        country="ua"
        value={phone}
        isValid={(value, country) => {
          if (regPattern && !regPattern.test(value)) {
            return `Invalid value: ${value}, ${country}`;
          }
          return true;
        }}
        disableDropdown
        disabled={disabled}
        inputClass={cx(theme.input, {
          [theme.error]: Boolean(error),
        })}
        containerClass={theme.container}
        buttonClass={cx(theme.button, {
          [theme.disabledButton]: disabled,
        })}
        dropdownClass={theme.select}
        inputProps={inputProps}
        onChange={onChangePhone}
        {...others}
      />

      <DefaultValue
        value={isEqualValues ? undefined : defaultValue}
        onAccept={onChangePhone}
      />

      <Hidden name={name} value={phone} />
      <Error theme={{ error: theme.error }} error={error} />
    </label>
  );
}, styles);
