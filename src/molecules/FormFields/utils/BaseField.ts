type TypeValue = null | number | string | boolean | File;

export interface BaseField<T = TypeValue | TypeValue[]> {
  onBlur?: () => void;
  onChange?: (value: T) => void;
  error?: string | null;
  defaultValue?: string;
}
