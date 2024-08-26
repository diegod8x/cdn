import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
export declare class MsdErrorMessageCustomComponent {
    private renderer;
    private element;
    nameIcon: string;
    colorIcon: string;
    numberSize: string;
    constructor(renderer: Renderer2, element: ElementRef);
    ngOnInit(): void;
}
