import React, { useCallback } from 'react';

import { useAxios } from '@upp/chrome/utils';
import { themr } from '@upp/chrome/components';

import { Form, FormProps } from '../../components';

export type FormContainerProps = Omit<FormProps, 'onSubmit' | 'hasError'> & {
  onSubmit?(args: Record<string, string>): void;
};

export const FormContainer = themr((props: FormContainerProps) => {
  const {
    onSubmit,
    action,
    error: outerError,
    loading: outerLoading,
    ...others
  } = props;

  const [{ loading, error }, sendForm] = useAxios(
    {
      url: action,
      method: 'POST',
    },
    {
      manual: true,
    }
  );

  const handleSubmit = useCallback(
    async (data) => {
      if (action) {
        await sendForm({ data });
      }

      onSubmit?.(data);
    },
    [action, onSubmit, sendForm]
  );

  return (
    <Form
      {...others}
      action={action}
      loading={loading || outerLoading}
      error={error?.message || outerError}
      formErrors={error?.response?.data?.formErrors}
      onSubmit={handleSubmit}
    />
  );
}, {});
