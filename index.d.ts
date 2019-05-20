import * as React from 'react';
import { IButtonProps } from './typings/Button';
import { ICheckboxProps } from './typings/Checkbox';
import { IInputProps } from './typings/Input';
import { ITextareaProps } from './typings/Textarea';
import { IIconButtonProps } from './typings/IconButton';
import { ISelectOption, ISelectProps } from './typings/Select';
import { ControlSizes as EControlSizes, ButtonTypes as EButtonTypes } from './constants';

export type ISelectOption = ISelectOption;

declare const ControlSizes: typeof EControlSizes;
declare const ButtonTypes: typeof EButtonTypes;
declare const Button: React.ComponentClass<IButtonProps>;
declare const IconButton: React.ComponentClass<IIconButtonProps>;
declare const Checkbox: React.ComponentClass<ICheckboxProps>;
declare const Input: React.ComponentClass<IInputProps>;
declare const Textarea: React.ComponentClass<ITextareaProps>;
declare const Select: React.ComponentClass<ISelectProps>;
declare const Section: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>>;
declare const SectionBlock: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>>;
declare const SectionTitle: React.ComponentClass<React.HTMLAttributes<HTMLParagraphElement>>;