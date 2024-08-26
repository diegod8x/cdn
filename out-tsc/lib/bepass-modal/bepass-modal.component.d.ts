import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
export declare class BePassModalComponent implements OnInit {
    private _render;
    widthModalInput: Object;
    coutnSownStart: number;
    second: number;
    minute: number;
    newModalContent: string;
    newOpenBePassModal: boolean;
    counterMin: number;
    counterSec: number;
    intervalId: any;
    trapFocus: boolean;
    set modalContent(value: string);
    set openBePassModal(value: boolean);
    widthModal: string;
    modalOn: ElementRef<HTMLInputElement>;
    keyNextAction: EventEmitter<string>;
    constructor(_render: Renderer2);
    ngOnInit(): void;
    onKeydownHandler(event: any): void;
    sizeChange(event: any): void;
    startTimer(): void;
    openModal(): void;
    cnvert(value: any): any;
    closeModalInit(): void;
    setInfoContent(): string;
    cierraModal(value?: string): void;
}
