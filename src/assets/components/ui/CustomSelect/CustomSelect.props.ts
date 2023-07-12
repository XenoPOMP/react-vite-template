import { ReactNode } from 'react';
import { MultiValue, SingleValue } from 'react-select';

/**
 * Custom select`s option.
 */
export type SelectOption = {
  /** Value, meta-name of select option. */
  value?: string;

  /** ReactNode that is being rendered instead
   * of value.
   */
  label: ReactNode;

  /** Color scheme of multi-value badge. */
  multiColors?: {
    background?: string;
    font?: string;
  };

  /** Color scheme of multi-value badge`s
   *  remove button.
   */
  removeMultiColors?: {
    background?: string;
    icon?: string;
  };
};

/**
 * Allows adding select option with custom value`s
 * type.
 */
export type TypedSelectOption<Value extends SelectOption['value']> = {
  value: Value;
} & Omit<SelectOption, 'value'>;

export interface CustomSelectProps {
  options?: SelectOption[];
  onChange?: (
    option: SingleValue<SelectOption> | MultiValue<SelectOption>,
  ) => any;
  defaultValue?: SelectOption;
  placeholder?: string;
  isMulti?: boolean;
}
