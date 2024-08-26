import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class CurvedHeaderComponent implements OnInit {
    private renderer;
    private el;
    changeHeight: Object;
    icono: string;
    sizeIcono: string;
    colorIcono: string;
    color: string;
    heightHeader: string;
    backgroundColor: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
}
