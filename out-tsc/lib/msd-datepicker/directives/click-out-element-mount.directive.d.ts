import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClickOutElementMount {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clickOutElementMount: EventEmitter<any>;
    onMouseEnter(targetElement: any): void;
}
