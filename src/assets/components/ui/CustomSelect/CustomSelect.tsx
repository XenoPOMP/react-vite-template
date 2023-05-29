import cn from 'classnames';
import { CSSProperties, FC, useEffect, useState } from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';
import AsyncSelect from 'react-select/async';

import styles from './CustomSelect.module.scss';
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
 * @param {(option: SingleValue<SelectOption> | MultiValue<SelectOption>) => any} onChange				 onChange event callback. Takes event changes
 * 												 																																			   as argument.
 * @param {string} placeholder			 																															 select`s placeholder.
 * @param {boolean} isMulti				   																											         defines whether select is multiply or not.
 * @constructor
 */
const CustomSelect: FC<CustomSelectProps> = ({
	options,
	onChange,
	placeholder,
	isMulti,
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

		placeholder: (styles, props) => {
			return { ...styles, color: 'var(--ui-select-font-base)' };
		},

		// Styling option (single value)
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				color: 'var(--ui-select-font-base)',
				backgroundColor:
					isSelected || isFocused ? 'var(--ui-select-selection)' : '',
			};
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
			isMulti={isMulti}
			placeholder={placeholder}
			styles={colorStyles}
		></Select>
	);
};

export default CustomSelect;
