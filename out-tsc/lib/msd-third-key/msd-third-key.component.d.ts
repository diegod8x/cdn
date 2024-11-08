import { EventEmitter, Renderer2, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class MsdThirdKeyComponent implements OnInit, OnChanges {
    private _render;
    private _formInputUser;
    private element;
    modalTitle: string;
    modalContent: string;
    modalThirdKey: boolean;
    userPhone: string;
    widthModal: string;
    validKey: boolean;
    msgError: string;
    userInsertKey: string;
    disabled: boolean;
    trapFocus: boolean;
    set statusMsg(value: boolean);
    set msgExt(value: string);
    error: ElementRef<HTMLInputElement>;
    modalOn: ElementRef<HTMLInputElement>;
    userSMSInput: ElementRef<HTMLInputElement>;
    contModal: ElementRef;
    passValues: EventEmitter<string>;
    keyNextAction: EventEmitter<string>;
    keyCloseAction: EventEmitter<string>;
    private _keyInter;
    _nextAction: string;
    _closeAction: string;
    msgExtInt: string;
    statusMsgInt: boolean;
    formInter: FormGroup;
    widthModalInput: Object;
    saveActiveEl: any | undefined;
    constructor(_render: Renderer2, _formInputUser: FormBuilder, element: ElementRef);
    ngOnInit(): void;
    getActiveElement(): void;
    onKeydownHandler(event: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    openModal(): void;
    closeModal(): void;
    validateKey(): void;
    toClose(): void;
    checkKey(): void;
    onlyNumb(event: KeyboardEvent): void;
    resetValue(): void;
    statusStart(): void;
    statusNull(): void;
    statusValid(): void;
    statusInvalid(): void;
    btnEnabled(): void;
    btnDisabled(): void;
    cleanErrors(): void;
}
