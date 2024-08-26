import { OnInit, Renderer2, ElementRef, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class ValidationInputComponent implements OnInit, OnChanges {
    private _render;
    private _fb;
    nameIconInput: string;
    activatedBorderAlert: boolean;
    private _keyInter;
    togglePass: string;
    finishPassInter: boolean;
    msgError: string;
    c1Input: ElementRef<HTMLInputElement>;
    contValInp: ElementRef;
    passInter: EventEmitter<string>;
    formInter: FormGroup;
    constructor(_render: Renderer2, _fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    onlyAlphaNumb(event: KeyboardEvent): boolean;
    checkPass(): void;
    changeIconPass(): void;
    showMsgError(): string;
}
