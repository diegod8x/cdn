import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClckOutsideDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clckOutside: EventEmitter<any>;
    onMouseEnter(targetElement: any): void;
}
