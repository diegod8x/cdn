import { Renderer2, ElementRef } from '@angular/core';
export declare class MsdAlertModalComponent {
    private renderer;
    trapFocus: boolean;
    msdIcon: string;
    size: string;
    color: string;
    autoModal: string;
    abreModal: ElementRef<HTMLInputElement>;
    infoAlert: ElementRef;
    widthModal: string;
    widthModalInput: Object;
    saveActiveEl: any | undefined;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    sizeChange(event: any): void;
    ngAfterViewInit(): void;
    getActiveElement(): void;
    openModal(): void;
    cierraModal(): void;
    onKeydownHandler(event: any): void;
}
