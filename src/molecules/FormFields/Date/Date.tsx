import React, { useMemo } from 'react';
import { format } from 'date-fns';

import { themr } from '@upp/chrome/components';

import { types, BaseField } from '../utils';
import { DefaultInput, DefaultInputProps } from '../DefaultInput';

interface DateProps
  extends Omit<types.DefaultField, 'type'>,
    BaseField<string> {
  theme?: DefaultInputProps['theme'];
}

export const DateField = themr((props: DateProps) => {
  const value = useMemo(() => {
    if (!props.value) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return isNaN(Date.parse(props.value))
      ? undefined
      : format(new Date(props.value), 'dd MMM yyyy');
  }, [props.value]);

  return (
    <DefaultInput
      iconName="calendar"
      {...props}
      disabled
      value={value}
      type={types.TypeField.Text}
    />
  );
}, {});
