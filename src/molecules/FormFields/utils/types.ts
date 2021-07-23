import { IconsType } from '@upp/chrome/components';

export enum TypeField {
  Tel = 'tel',
  Date = 'date', // need to realization
  File = 'file',
  Text = 'text',
  Email = 'email',
  Hidden = 'hidden',
  Select = 'select',
  Number = 'number',
  Password = 'password',
  Textarea = 'textarea',
  Attachment = 'attachment',
}

export interface BaseTitle {
  title: string;
  required?: boolean;
}

export interface BaseInput<T = TypeField> {
  type: T;
  name: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
}

type BaseText = {
  pattern?: string;
  minLength?: number;
  maxLength?: number;
};

export type BaseField<T> = BaseTitle & BaseInput<T>;

export type Tel = BaseField<TypeField.Tel>;
export type Hidden = BaseInput<TypeField.Hidden>;
export type File = BaseField<TypeField.File>;
export type Attachment = BaseField<TypeField.Attachment>;
export type TextArea = BaseField<TypeField.Textarea> & BaseText;

export type DefaultField<
  T =
    | TypeField.Text
    | TypeField.Email
    | TypeField.Password
    | TypeField.Number
    | TypeField.Date
> = BaseField<T> &
  BaseText & {
    iconName?: IconsType;
  };

export type Option = {
  id: number;
  label: string;
  value: string;
};

export type Suggestions = {
  url: string;
  name?: string;
};

export type Select = Omit<BaseField<TypeField.Select>, 'value'> & {
  value?: string | string[];
  data?: Option[];
  multiple?: boolean;
  suggestions?: Suggestions;
};

export type Field = (
  | Tel
  | Hidden
  | File
  | Attachment
  | TextArea
  | DefaultField
  | Select
) & {
  selector?: string;
};
