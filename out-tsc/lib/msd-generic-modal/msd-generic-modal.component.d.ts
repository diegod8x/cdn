import { ElementRef, OnInit, Renderer2, SimpleChanges } from '@angular/core';
export declare class MsdGenericModalComponent implements OnInit {
    private _render;
    private element;
    trapFocus: boolean;
    clickCloseModal: boolean;
    modalGeneric: boolean;
    widthModal: string;
    heightModal: string;
    topClose: string;
    id_button_close?: string;
    modalOn: ElementRef<HTMLInputElement>;
    topCloseInput: ElementRef<HTMLInputElement>;
    heightModalInput: ElementRef;
    widthModalInput: Object;
    saveActiveEl: any | undefined;
    constructor(_render: Renderer2, element: ElementRef);
    ngOnInit(): void;
    getActiveElement(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    openModal(): void;
    closeModal(): void;
    handleKeyboardEvent(event: KeyboardEvent): void;
}
