import { IconsType } from '@upp/chrome/components';

export enum TypeField {
  Tel = 'tel',
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
  maxLength?: number;
};

export type BaseField<T> = BaseTitle & BaseInput<T>;

export type Tel = BaseField<TypeField.Tel>;
export type Hidden = BaseInput<TypeField.Hidden>;
export type Attachment = BaseField<TypeField.Attachment>;
export type TextArea = BaseField<TypeField.Textarea> & BaseText;

export type DefaultField<
  T = TypeField.Text | TypeField.Email | TypeField.Password | TypeField.Number
> = BaseField<T> &
  BaseText & {
    iconName?: IconsType;
  };

export type Option = {
  label: string;
  value: string;
};

export type Suggestions = {
  url: string;
  name?: string;
};

export type Select = BaseField<TypeField.Select> & {
  data?: Option[];
  multiple?: boolean;
  suggestions?: Suggestions;
};

export type Field = (
  | Tel
  | Hidden
  | Attachment
  | TextArea
  | DefaultField
  | Select
) & {
  selector?: string;
};
