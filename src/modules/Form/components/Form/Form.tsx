import React, { useRef, useMemo, useState, useCallback } from 'react';

import { themr, Button, Spinner } from '@upp/chrome/components';
import { FormFields } from '@upp/chrome/molecules';

import { Field } from '../Field';
import styles from './Form.module.scss';

export interface FormProps {
  theme: typeof styles;
  data: FormFields.types.Field[];
  onSubmit(args: Record<string, string | string[]>): void;
  error?: string;
  title?: string;
  action?: string;
  loading?: boolean;
  description?: string;
  titleSubmitButton?: string;
  disabledSubmitButton?: boolean;
  formErrors?: Record<string, string>;
  onChange?(value: string, name: string): void;
}

export const Form = themr((props: FormProps) => {
  const {
    data,
    theme,
    title,
    error,
    action,
    loading,
    formErrors,
    description,
    disabledSubmitButton,
    titleSubmitButton = 'Submit',
    onSubmit,
    onChange,
  } = props;

  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleSubmit = useCallback(
    (e?: React.SyntheticEvent<HTMLFormElement>) => {
      e?.preventDefault();
      setErrors({});

      const newErrors: Record<string, string> = {};
      const allData: Record<string, string | string[]> = {};
      const formData = new FormData(
        (form.current || e?.target) as HTMLFormElement
      );

      const names = data.map((f) => f.name);

      for (const name of names) {
        const field = data.find((f) => f.name === name);
        const values = formData.getAll(name);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { pattern, required, minLength, isValid } = field || {};

        // validate fields
        let isError = values.some((v) => {
          if (v instanceof File) {
            if (!required || v.name) {
              return false;
            }

            newErrors[name] = `${name} is required`;
            return true;
          }

          if (required && typeof v === 'string' && v.length === 0) {
            newErrors[name] = `${name} is required`;
            return true;
          }

          if (minLength && (!value || value.length < minLength)) {
            newErrors[name] = `Min length ${name} is ${minLength}`;

            return true;
          }

          if (isValid && isValid(v)) {
            return false;
          }

          if (
            pattern &&
            v.length !== 0 &&
            !new RegExp(pattern.replace(/\\\\/g, '\\')).test(v)
          ) {
            newErrors[name] = `"${v}" wrong to: /${pattern}/`;
            return true;
          }

          return false;
        });

        if (
          !isError &&
          required &&
          Array.isArray(values) &&
          values.length === 0
        ) {
          isError = true;
          newErrors[name] = `${name} is required`;
        }

        if (isError) {
          // eslint-disable-next-line no-continue
          continue;
        }

        const value = (!name.includes('[]') && values.length === 1
          ? values[0]
          : values.filter(Boolean)) as string | string[];

        if (
          (Array.isArray(value) || typeof value === 'string') &&
          value.length === 0
        ) {
          // eslint-disable-next-line no-continue
          continue;
        }

        allData[name] = Array.isArray(value)
          ? value.map((v) => v.trim())
          : value.trim();
      }

      if (Object.values(newErrors).length !== 0) {
        setErrors(newErrors);
        return;
      }

      onSubmit?.(allData);
    },
    [data, onSubmit]
  );

  const onChangeField = useCallback((v, name) => {
    setErrors((e) => ({
      ...e,
      [name]: null,
    }));
    onChange?.(v, name);
  }, []);

  const spinner = useMemo(
    () => (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    ),
    []
  );

  const hasError = useMemo(
    () => Object.values(errors).filter(Boolean).length !== 0,
    [errors]
  );

  return (
    <form
      ref={form}
      action={action}
      method="POST"
      onSubmit={loading ? undefined : handleSubmit}
      className={theme.form}
      noValidate
    >
      {title && <h2 className={theme.title}>{title}</h2>}
      {description && <p className={theme.description}>{description}</p>}

      <ul className={theme.fields}>
        {data.map((f) => (
          <Field
            key={f.name}
            {...f}
            disabled={loading || f.disabled || f.readOnly}
            error={errors[f.name] || formErrors?.[f.name]}
            onChange={onChangeField}
          />
        ))}
      </ul>

      <input type="submit" tabIndex={-1} className={theme.submit} />

      {error && <p className={theme.error}>{error}</p>}

      <Button
        theme={{ button: theme.button }}
        type={hasError ? 'danger' : 'primary'}
        leftIcon={loading ? spinner : undefined}
        disabled={loading || hasError || disabledSubmitButton}
        onClick={handleSubmit}
      >
        {titleSubmitButton}
      </Button>
    </form>
  );
}, styles);
