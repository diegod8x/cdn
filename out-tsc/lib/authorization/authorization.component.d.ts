import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class AuthorizationComponent implements OnInit {
    private _render;
    private _formBuilder;
    titleHeader: string;
    key: string;
    card: string;
    BePass: string;
    msgLock: string;
    token: string;
    tokenOne: string;
    coordinates: any[];
    process: string;
    errorMsg: string;
    cardNumber: string | number;
    deviceNumber: string | number;
    textCard: string;
    textToken: string;
    textTokenOne: string;
    iconLeft: string;
    color: string;
    borde: string;
    cleanOff: boolean;
    servOff: boolean;
    set msgErrorExt(value: string);
    coordenadaUno: ElementRef<HTMLInputElement>;
    coordenadaDos: ElementRef<HTMLInputElement>;
    coordenadaTres: ElementRef<HTMLInputElement>;
    ingresoToken: ElementRef<HTMLInputElement>;
    bePassBlock: ElementRef;
    radioInputBP: ElementRef<HTMLInputElement>;
    radioInputKey: ElementRef<HTMLInputElement>;
    radioInputCard: ElementRef<HTMLInputElement>;
    radioInputToken: ElementRef<HTMLInputElement>;
    AtccBlockKey: ElementRef;
    AtccBlockCard: ElementRef;
    AdtBlockToken: ElementRef;
    authoSelected: EventEmitter<any>;
    tokenExampleUser: EventEmitter<string>;
    inputEvent: EventEmitter<string>;
    selectedOperation: string;
    stylePassWord: Object;
    styleInputToken: Object;
    styleCursorCard: Object;
    expreNumber: RegExp;
    lockedCard: boolean;
    lockedToken: boolean;
    lockedOneToken: boolean;
    tokenError: boolean;
    lockedBePass: boolean;
    lockedKey: boolean;
    cardError: boolean;
    desktop: boolean;
    msgExt: string;
    toggleTokenCondition: boolean;
    toggleCoordinateCondition: boolean;
    tokenForm: FormGroup;
    cardForm: FormGroup;
    constructor(_render: Renderer2, _formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes?: any): void;
    sizeChange(event: any): void;
    tokenValid(value?: string): void;
    tokenOneValid(value?: string): void;
    checkedMethod(value: string, e: Event): void;
    sendingEvent(): void;
    cleanErrors(): void;
    onlyNumber(event: any): boolean;
    moveToInput(event: any): void;
    backToInput(event: any): void;
    emitCoordinates(): void;
    noneElements(): void;
    exampleToken(): void;
    lockedCardFunction(): void;
    lockedTokenFunction(): void;
    lockedTokenOneFunction(): void;
    toggleToken(e: any): void;
    toggleCoordinate(e: any): void;
}