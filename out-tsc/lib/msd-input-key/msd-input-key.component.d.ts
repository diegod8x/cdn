import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class MsdInputKeyComponent implements OnInit {
    private _fb;
    private _render;
    nameIconInput: string;
    validationError: boolean;
    validationCorrect: boolean;
    formInter: FormGroup;
    msgError: string;
    titlePass: string;
    activatedBorderSuccess: boolean;
    validations: any;
    passCard: EventEmitter<string>;
    c1Input: ElementRef<HTMLInputElement>;
    c2Input: ElementRef<HTMLInputElement>;
    c3Input: ElementRef<HTMLInputElement>;
    c4Input: ElementRef<HTMLInputElement>;
    constructor(_fb: FormBuilder, _render: Renderer2);
    ngOnInit(): void;
    changeIconPass(): void;
    onlyNumber(event: any): boolean;
    sendValuesKey(): void;
    moveToInput(event: any): void;
    backToInput(event: any): void;
}
