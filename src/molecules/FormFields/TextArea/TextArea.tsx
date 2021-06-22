import React, { useEffect, useState, useCallback } from 'react';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { types, BaseField } from '../utils';
import { Title, Error, DefaultValue } from '../Additional';

import styles from './TextArea.module.scss';

interface TextAreaProps extends Omit<types.TextArea, 'type'>, BaseField {
  theme: typeof styles;
}

export const TextArea = themr((props: TextAreaProps) => {
  const {
    name,
    error,
    title,
    theme,
    required,
    maxLength,
    defaultValue,
    onChange,
    ...otherProps
  } = props;

  const [value, setValue] = useState(props.value || '');

  const isMaxLength = typeof maxLength === 'number';

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setValue(value);
      onChange?.(value.trim());
    },
    [onChange]
  );

  const onAccept = useCallback(
    (newValue) => {
      setValue(newValue.trim());
      onChange?.(newValue.trim());
    },
    [onChange]
  );

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  return (
    <label className={cx(theme.container, { [theme.error]: Boolean(error) })}>
      <Title title={title} required={required} />

      <div className={theme.containerTextarea}>
        <textarea
          {...otherProps}
          name={name}
          value={value}
          maxLength={maxLength}
          className={theme.textarea}
          onChange={handleChange}
        />

        {isMaxLength && (
          <h6 className={theme.counter}>
            {value.length}/{maxLength}
          </h6>
        )}
      </div>

      <DefaultValue
        value={defaultValue === value ? undefined : defaultValue}
        onAccept={onAccept}
      />
      <Error error={error} />
    </label>
  );
}, styles);
