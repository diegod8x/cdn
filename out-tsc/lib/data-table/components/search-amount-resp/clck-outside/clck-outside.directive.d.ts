import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClckOutsideDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clckOutside3: EventEmitter<any>;
    onMouseEnter(targetElement: any): void;
}
