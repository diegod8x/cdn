import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
export declare class MsdErrorMessageComponent {
    private renderer;
    private element;
    msdIcon: string;
    textHeader: string;
    colorIcon: string;
    size: string;
    errorType: string;
    constructor(renderer: Renderer2, element: ElementRef);
    ngOnInit(): void;
}
