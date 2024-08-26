import { ElementRef, Renderer2 } from '@angular/core';
export declare class SortDirective {
    private renderer;
    private targetElem;
    appSort: Array<any>;
    constructor(renderer: Renderer2, targetElem: ElementRef);
    sortData(): void;
}
