import React, { useMemo, useCallback } from 'react';
import cx from 'classnames';

import { themr, ErrorBoundary } from '@upp/chrome/components';

import { FormFields } from '@upp/chrome/molecules';

import styles from './Field.module.scss';

export type FieldProps = Omit<
  FormFields.types.Field & FormFields.BaseField,
  'onChange'
> & {
  theme: typeof styles;
  defaultValue?: string;
  onChange?(value: string, name: string): void;
};

export const Field = themr((props: FieldProps) => {
  const { selector, type, value, theme, name, onChange, ...others } = props;

  const isHidden = type === FormFields.types.TypeField.Hidden;

  const handleChange = useCallback(
    (v) => {
      onChange?.(v, name);
    },
    [name, onChange]
  );

  const defaultValue = useMemo(() => {
    if (selector) {
      const dom = document.querySelector<HTMLInputElement>(selector);
      return (dom?.value || dom?.src || dom?.innerHTML)?.trim();
    }

    return undefined;
  }, [selector]);

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

      case FormFields.types.TypeField.Email:
      case FormFields.types.TypeField.Number:
      case FormFields.types.TypeField.Text:
      case FormFields.types.TypeField.Password:
        return FormFields.DefaultInput;

      default:
        console.error(`This type is not supported [${type}]`);
        return null;
    }
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
          value={value}
          theme={theme}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...others}
        />
      </ErrorBoundary>
    </li>
  );
}, styles);
