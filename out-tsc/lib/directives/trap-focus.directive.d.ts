import { ElementRef, AfterViewInit } from '@angular/core';
export declare class TrapFocusDirective implements AfterViewInit {
    private el;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    trapFocus(element: any): void;
}
