import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class TooltipTefComponent implements OnInit {
    private _render;
    styleWidth: any;
    stylePosition: any;
    left: string;
    right: string;
    top: string;
    bottom: string;
    displayInput: string;
    widthInput: string;
    heightInput: string;
    tooltip: ElementRef;
    elementTooltip: ElementRef;
    constructor(_render: Renderer2);
    onWindowScroll(event: any): void;
    ngOnInit(): void;
    openEdit(event: MouseEvent): void;
    closeEdit(): void;
}
