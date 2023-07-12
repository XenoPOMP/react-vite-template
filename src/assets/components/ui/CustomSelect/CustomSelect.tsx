import cn from 'classnames';
import { FC } from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';

import { PropsWith } from '@type/PropsWith';

import type { CustomSelectProps, SelectOption } from './CustomSelect.props';

/**
 * Custom **Select** component based on
 * react-select library.
 *
 * @example
 * <CustomSelect
 *   options={[
 *     {
 *       value: 'ru',
 *       label: (
 *         <div className={'items-center flex gap-[.25em]'}>
 *           <Emoji name={'flagRussia'} height={'1em'} /> Russian
 *         </div>
 *       ),
 *       multiColors: {
 *         background: 'blue',
 *         font: 'white',
 *       },
 *       removeMultiColors: {
 *         background: 'yellow',
 *         icon: 'red',
 *       },
 *     },
 *     {
 *       value: 'en',
 *       label: 'English',
 *     },
 *   ]}
 *   onChange={newOption => {
 *     console.log(newOption);
 *   }}
 *   placeholder={'Select language'}
 *   isMulti={true}
 * />
 *
 * @param {SelectOption} options          																												 option list of {@link SelectOption}s.
 *
 * @param {(option: SingleValue<SelectOption> | MultiValue<SelectOption>) => any} onChange				 onChange event callback. Takes event changes
 * 												 																																			   as argument.
 *
 * @param {string} placeholder			 																															 select`s placeholder.
 *
 * @param {boolean} isMulti				   																											         defines whether select is multiply or not.
 *
 * @param {string} className																																			 custom class definition.
 *
 * @param {SelectOption} [defaultValue]																														 option that will be selected by default.
 *
 * @constructor
 */
const CustomSelect: FC<PropsWith<'className', CustomSelectProps>> = ({
  options,
  onChange,
  placeholder,
  isMulti,
  className,
  defaultValue,
}) => {
  const colorStyles: StylesConfig<
    SelectOption,
    boolean,
    GroupBase<SelectOption>
  > = {
    // Styling control element
    control: (styles, { isFocused }) => {
      return {
        ...styles,
        background: 'var(--ui-select-background)',

        borderColor: !isFocused
          ? 'var(--ui-select-border)'
          : 'var(--ui-border)',

        boxShadow: !isFocused ? 'var(--ui-select-border)' : 'var(--ui-border)',

        borderWidth: 2,

        ':hover': {
          borderColor: !isFocused
            ? 'var(--ui-select-border)'
            : 'var(--ui-border)',
        },
      };
    },

    input: styles => {
      return { ...styles, color: 'var(--ui-select-font-base)' };
    },

    placeholder: (styles, props) => {
      return { ...styles, color: 'var(--ui-select-font-base)' };
    },

    // Styling option (single value)
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: 'var(--ui-select-font-base)',
        backgroundColor:
          isSelected || isFocused
            ? 'var(--ui-select-selection)'
            : 'var(--ui-select-background)',
      };
    },

    group: styles => {
      return { ...styles, background: 'red' };
    },

    // Styling multi-value
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data?.multiColors?.background
          ? data?.multiColors?.background
          : 'var(--ui-multi-select-def)',
        color: data?.multiColors?.font
          ? data?.multiColors?.font
          : 'var(--ui-multi-select-font-def)',
      };
    },

    // Styling multi-value label
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: data?.multiColors?.font
          ? data?.multiColors?.font
          : 'var(--ui-multi-select-font-def)',
      };
    },

    // Styling remove button of multi-value label
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        cursor: 'pointer',
        ':hover': {
          background: data?.removeMultiColors?.background
            ? data?.removeMultiColors?.background
            : 'var(--ui-select-remove-back)',
          color: data?.removeMultiColors?.icon
            ? data?.removeMultiColors?.icon
            : 'var(--ui-select-remove-icon)',
        },
      };
    },
  };

  return (
    <Select
      options={options}
      onChange={option => {
        // Invoke onChange event if it is
        // defined
        if (onChange) {
          onChange(option);
        }
      }}
      defaultValue={defaultValue}
      isMulti={isMulti}
      placeholder={placeholder}
      styles={colorStyles}
      className={cn(className)}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral80: 'var(--ui-select-font-base)',
          neutral0: 'var(--ui-select-background)',
        },
      })}
    ></Select>
  );
};

export default CustomSelect;
