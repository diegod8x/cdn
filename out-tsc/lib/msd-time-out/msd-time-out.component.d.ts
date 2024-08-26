import { ElementRef, OnInit, Renderer2, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class MsdTimeOutComponent implements OnInit {
    private renderer;
    trapFocus: boolean;
    abreModal: ElementRef<HTMLInputElement>;
    openModalEle: ElementRef;
    modalTimeOut: boolean;
    widthModal: string;
    timeOutStatus: EventEmitter<string>;
    clockTime: Subscription;
    coutnSownStart: number;
    second: number;
    minute: number;
    widthModalInput: Object;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    onKeydownHandler(event: KeyboardEvent): void;
    ngOnChanges(): void;
    openModal(): void;
    cierraModal(value?: string): void;
}
