import { ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
export declare class HeaderCurvoComponent implements OnInit {
    private _location;
    private el;
    backButton: boolean;
    callBack: Function;
    icono: string;
    sizeIcono: string;
    colorIcono: string;
    color: string;
    colorCircle: string;
    colorCircleStyle: Object;
    constructor(_location: Location, el: ElementRef);
    ngOnInit(): void;
    redirect(): void;
}
