import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';

import { themr, Icon } from '@upp/chrome/components';

import { Hidden } from '../Hidden';
import { types, BaseField } from '../utils';

import styles from './Attachment.module.scss';

enum ErrorType {
  Value,
  DefaultValue,
}

interface AttachmentProps extends Omit<types.Attachment, 'type'>, BaseField {
  theme: typeof styles;
}

export const Attachment = themr((props: AttachmentProps) => {
  const { name, defaultValue, title, theme } = props;

  const [value, setValue] = useState(props.value || '');
  const [error, setError] = useState<ErrorType>();

  const onError = useCallback(() => {
    setError(ErrorType.Value);
  }, []);

  const onErrorDefaultValue = useCallback(() => {
    setError(ErrorType.DefaultValue);
  }, []);

  const onAccept = useCallback(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    setValue(props.value || '');
  }, [props.value]);

  return (
    <div className={theme.attachment}>
      {!value && (
        <div className={theme.photo}>
          <Icon name="no-photo" theme={{ icon: theme.noPhoto }} />
        </div>
      )}

      {value && defaultValue !== value && error !== ErrorType.Value && (
        <div className={theme.defaultValue}>
          <img
            alt={title}
            src={value}
            className={theme.photo}
            onError={onError}
          />
        </div>
      )}

      {defaultValue && error !== ErrorType.DefaultValue && (
        <button
          type="button"
          className={cx(theme.defaultValue, {
            [theme.value]: defaultValue === value || error === ErrorType.Value,
          })}
          disabled={defaultValue === value}
          onClick={onAccept}
        >
          <img
            alt={title}
            src={defaultValue}
            className={theme.photo}
            onError={onErrorDefaultValue}
          />
        </button>
      )}

      <Hidden name={name} value={value} />
    </div>
  );
}, styles);
