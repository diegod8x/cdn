import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
export declare class HeaderAutoserviciosComponent implements OnInit {
    private _location;
    msdSvgIcon: string;
    headerTitle: string;
    size: string;
    backButton: boolean;
    bechLogo: boolean;
    mainTitle: boolean;
    callBack: Function;
    headerWidth: string;
    headerWidthInput: Object;
    constructor(_location: Location);
    ngOnInit(): void;
    sizeChange(event: any): void;
    redirect(): void;
}
