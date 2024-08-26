import { OnInit } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';
export declare class MsdTimeOutEndComponent implements OnInit {
    private renderer;
    autoModal: string;
    abreModal: ElementRef<HTMLInputElement>;
    openModalElement: ElementRef;
    saveActiveEl: any | undefined;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    openModal(): void;
    cierraModal(): void;
    getActiveElement(): void;
    onKeydownHandler(event: KeyboardEvent): void;
}
