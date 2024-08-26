import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class MsdDisplayCalltoactionComponent implements OnInit {
    private el;
    private renderer;
    arrowDirection: string;
    heightSize: string;
    contentHeight: ElementRef;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
