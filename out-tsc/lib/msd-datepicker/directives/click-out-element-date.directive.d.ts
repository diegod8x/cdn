import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClickOutElementDate {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clickOutElementDate: EventEmitter<any>;
    onMouseEnter(targetElement: any): void;
}
