import { ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
export declare class HeaderComponent {
    private _location;
    private renderer;
    backButton: boolean;
    callBack: Function;
    titulo: string;
    msdSvgIcon: string;
    el: ElementRef;
    iconColor: string;
    constructor(_location: Location, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    redirect(): any;
    renderIcon(): void;
}
