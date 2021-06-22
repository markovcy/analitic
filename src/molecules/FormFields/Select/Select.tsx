import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import SelectUI from 'react-select';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { useAxios } from '@upp/chrome/utils';

import { Input } from '../Input';
import { types, BaseField } from '../utils';

import styles from './Select.module.scss';

export interface SelectProps
  extends Omit<types.Select, 'type'>,
    Omit<BaseField, 'onChange'> {
  theme: typeof styles;
  onChange(value: string, option: types.Option): void;
}

export const Select = themr((props: SelectProps) => {
  const {
    name,
    error,
    value,
    title,
    theme,
    multiple,
    readOnly,
    required,
    disabled,
    suggestions,
    placeholder,
    onChange,
  } = props;

  const [{ data, loading }, getList] = useAxios<
    types.Option[] | Record<string, types.Option[]>
  >(
    {
      method: 'GET',
      url: suggestions?.url,
    },
    {
      manual: true,
      useCache: true,
    }
  );

  const fields = useMemo(() => {
    if (data) {
      return (
        (Array.isArray(data) ? data : data[suggestions?.name as string]) || []
      );
    }

    return props.data || [];
  }, [data, props.data, suggestions?.name]);

  const defaultValue = useRef(
    fields.find((option) => option.label === props.defaultValue)
  );

  const [selected, setSelected] = useState<types.Option | null>();

  const handleChange = useCallback(
    (option) => {
      setSelected(option);
      onChange?.(option?.value, option);
    },
    [onChange]
  );

  const themeCallback = useCallback(
    (selectThemes) => ({
      ...selectThemes,
      colors: {
        ...selectThemes.colors,
        danger: theme.darkRed,
        primary25: theme.clouds,
        primary50: theme.lightBlue,
        primary75: theme.skyBlue,
        primary: theme.deepSkyBlue,
      },
    }),
    [theme]
  );

  const noOptionsMessage = useCallback(() => 'No content', []);

  const onChangeValue = useCallback(() => {
    if (value) {
      const newSelected = fields.find((option) => option.value === value);
      setSelected(newSelected);
    } else {
      setSelected(null);
    }
  }, [value, fields]);

  const onAccept = useCallback(() => {
    setSelected(defaultValue.current);
  }, [defaultValue]);

  const dropdown = useMemo(
    () => (
      <SelectUI
        value={selected}
        theme={themeCallback}
        isLoading={loading}
        multiple={multiple}
        isDisabled={disabled}
        placeholder={placeholder || `${title}...`}
        className={cx(theme.select, { [styles.error]: error })}
        classNamePrefix={`${theme.selectPrefix} `}
        inputProps={{
          autoComplete: 'off',
          autoCorrect: 'off',
          spellCheck: 'off',
        }}
        options={fields}
        onChange={handleChange}
        noOptionsMessage={noOptionsMessage}
      />
    ),
    [
      selected,
      themeCallback,
      loading,
      multiple,
      disabled,
      placeholder,
      title,
      theme.select,
      theme.selectPrefix,
      error,
      fields,
      handleChange,
      noOptionsMessage,
    ]
  );

  useEffect(() => {
    onChangeValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (value) {
      const newSelected = fields.find((f) => f.value === value);

      if (newSelected) {
        handleChange(newSelected);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  useEffect(() => {
    if (suggestions) {
      getList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions]);

  return (
    <Input
      name={name}
      error={error}
      title={title}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      type={types.TypeField.Text}
      value={selected?.value || ''}
      defaultValue={
        defaultValue.current?.label === selected?.label
          ? undefined
          : defaultValue.current?.label
      }
      theme={{
        input: theme.hide,
        title: theme.title,
        container: theme.container,
        inputWrapper: theme.inputWrapper,
      }}
      onAccept={onAccept}
    >
      {dropdown}
    </Input>
  );
}, styles);
