import React, { useMemo, useState, useEffect, useCallback } from 'react';
import SelectUI from 'react-select';
import cx from 'classnames';

import { themr } from '@upp/chrome/components';

import { useAxios } from '@upp/chrome/utils';

import { Input } from '../Input';
import { types, BaseField } from '../utils';

import styles from './Select.module.scss';

export interface SelectProps
  extends Omit<types.Select & BaseField, 'type' | 'defaultValue' | 'onChange'> {
  theme: typeof styles;
  onChange(value: string, option: types.Option): void;
  defaultValue?: string | string[];
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
  console.log(error);

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

  const [selected, setSelected] = useState<
    types.Option | types.Option[] | null | undefined
  >(multiple ? [] : null);

  const fields = useMemo(() => {
    if (data) {
      return (
        (Array.isArray(data) ? data : data[suggestions?.name as string]) || []
      );
    }

    return props.data || [];
  }, [data, props.data, suggestions?.name]);

  const defaultValue = useMemo(() => {
    if (Array.isArray(props.defaultValue)) {
      return fields.filter(
        (o) =>
          props.defaultValue?.includes(String(o.id)) ||
          props.defaultValue?.includes(o.value)
      );
    }

    const newValue = fields.find(
      (o) =>
        String(o.id) === props.defaultValue || o.label === props.defaultValue
    );

    if (multiple) {
      return newValue ? [newValue] : [];
    }

    return newValue;
  }, [fields, multiple, props.defaultValue]);

  const defaultValueAccept = useMemo(() => {
    if (Array.isArray(defaultValue) && Array.isArray(selected)) {
      return defaultValue.length === selected.length &&
        defaultValue.every((o) => selected?.some((s) => o.value === s.value))
        ? undefined
        : defaultValue.map((d) => d.label).join(', ');
    }

    if (Array.isArray(defaultValue) || Array.isArray(selected)) {
      return undefined;
    }

    return defaultValue?.value === selected?.value
      ? undefined
      : defaultValue?.label;
  }, [defaultValue, selected]);

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
      if (multiple) {
        setSelected(
          fields.filter(
            (o) => String(o.id) === String(value) || o.value === value
          )
        );
      } else {
        setSelected(
          fields.find(
            (o) => String(o.id) === String(value) || o.value === value
          )
        );
      }
    } else {
      setSelected(null);
    }
  }, [value, multiple, fields]);

  const onAccept = useCallback(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const dropdown = useMemo(
    () => (
      <SelectUI
        value={selected}
        theme={themeCallback}
        isLoading={loading}
        isMulti={multiple}
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

  const values = useMemo(
    () =>
      Array.isArray(selected)
        ? selected.map((s) => String(s.id))
        : String(selected?.id),
    [selected]
  );

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

  useEffect(() => {
    onChangeValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, loading]);

  return (
    <Input
      name={name}
      error={error}
      title={title}
      value={values}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      type={types.TypeField.Text}
      defaultValue={defaultValueAccept}
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
