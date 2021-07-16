import React, { useMemo, useCallback } from 'react';
import cx from 'classnames';

import { themr, ErrorBoundary } from '@upp/chrome/components';

import { FormFields } from '@upp/chrome/molecules';

import { GET_PATH_BY_SELECTOR } from '../../utils';

import styles from './Field.module.scss';

export type FieldProps = Omit<
  FormFields.types.Field & FormFields.BaseField,
  'onChange' | 'defaultValue'
> & {
  theme: typeof styles;
  defaultValue?: string | string[];
  pattern?: string;
  onChange?(value: string, name: string): void;
};

export const Field = themr((props: FieldProps) => {
  const {
    name,
    type,
    value,
    theme,
    disabled,
    pattern,
    selector,
    onChange,
    ...others
  } = props;

  const isHidden = type === FormFields.types.TypeField.Hidden;

  const handleChange = useCallback(
    (v) => {
      onChange?.(v, name);
    },
    [name, onChange]
  );

  const defaultValue = useMemo(() => {
    if (selector && !disabled) {
      if (name.endsWith('[]') && type === FormFields.types.TypeField.Select) {
        const dom = document.querySelectorAll<HTMLInputElement>(selector);
        return [...dom].map((e) =>
          (e?.value || e?.src || e?.innerHTML)?.trim()
        );
      }

      if (selector === GET_PATH_BY_SELECTOR) {
        return window.location.href;
      }

      const dom = document.querySelector<HTMLInputElement>(selector);
      return (dom?.value || dom?.src || dom?.innerHTML)?.trim();
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, disabled]);

  const Component = useMemo(() => {
    switch (type) {
      case FormFields.types.TypeField.Attachment:
        return FormFields.Attachment;

      case FormFields.types.TypeField.Tel:
        return FormFields.Phone;

      case FormFields.types.TypeField.Hidden:
        return FormFields.Hidden;

      case FormFields.types.TypeField.Textarea:
        return FormFields.TextArea;

      case FormFields.types.TypeField.Select:
        return FormFields.Select;

      case FormFields.types.TypeField.Date:
        return FormFields.Date;

      case FormFields.types.TypeField.Email:
      case FormFields.types.TypeField.Number:
      case FormFields.types.TypeField.Text:
      case FormFields.types.TypeField.Password:
        return FormFields.DefaultInput;

      default:
        // eslint-disable-next-line no-console
        console.error(`This type is not supported [${name}:${type}]`);
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]) as React.FunctionComponent<Omit<FieldProps, 'selector'>>;

  if (!Component) {
    return null;
  }

  return (
    <li className={cx(theme.field, { [theme.hidden]: isHidden })}>
      <ErrorBoundary>
        <Component
          name={name}
          type={type}
          theme={theme}
          disabled={disabled}
          value={value || defaultValue}
          defaultValue={value ? defaultValue : undefined}
          onChange={handleChange}
          {...others}
        />
      </ErrorBoundary>
    </li>
  );
}, styles);
