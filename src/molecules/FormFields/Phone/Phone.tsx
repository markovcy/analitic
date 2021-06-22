import React, { useMemo, useEffect, useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { types, BaseField } from '../utils';
import { Title, Error, DefaultValue } from '../Additional';

import styles from './Phone.module.scss';

interface PhoneProps extends Omit<types.Tel, 'type'>, BaseField {
  theme: typeof styles;
}

export const Phone = themr((props: PhoneProps) => {
  const {
    name,
    value,
    readOnly,
    disabled,
    theme,
    title,
    error,
    required,
    defaultValue,
    onChange,
    ...others
  } = props;

  const [phone, setPhone] = useState<string>(value || '');

  const inputProps = useMemo(
    () => ({
      required,
      name,
      readOnly,
      disabled,
    }),
    [disabled, name, readOnly, required]
  );

  const onChangePhone = useCallback(
    (newPhone: string) => {
      setPhone(newPhone);
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

  return (
    <label className={styles.phone}>
      <Title title={title} required={required} />

      <PhoneInput
        prefix="+"
        country="ua"
        value={phone}
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

      <Error theme={{ error: theme.error }} error={error} />
    </label>
  );
}, styles);
