import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class InputComponent implements OnInit {
    label?: string;
    control: FormControl;
    type?: 'currency' | 'email' | 'number' | 'text';
    name?: string;
    inputDescription?: string;
    inputValidationMessage?: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    minLength?: any;
    maxLength?: any;
    min?: any;
    max?: any;
    isValid: boolean;
    inputType: string;
    constructor();
    ngOnInit(): void;
    setInputType(): void;
    onFocus(): void;
    onBlur(): void;
}
