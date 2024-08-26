import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class MenuDropComponent implements OnInit {
    private renderer;
    titleDownload: string;
    iconLeftDownload: string;
    iconRightDownload: string;
    sizeIcon: number;
    colorIconLeft: string;
    colorIconRight: string;
    upMode: boolean;
    dropDown: ElementRef;
    dropButton: ElementRef;
    styleWidthDrop: any;
    stylePositionDrop: any;
    dropping: boolean;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    onKeydownHandler(event: KeyboardEvent): void;
    toggleMenu(e: any): void;
    closeMenu(): void;
}
