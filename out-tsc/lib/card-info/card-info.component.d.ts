import { OnInit, OnChanges } from '@angular/core';
export declare class CardInfoComponent implements OnInit, OnChanges {
    colorHeader: string;
    colorIcon: string;
    nameIcon: string;
    sizeIcon: string;
    heightCard: string;
    widthCard: string;
    headerActive: boolean;
    changeColorHeader: Object;
    changeDimensions: Object;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    sizeChange(event: any): void;
    changeColorheader(): void;
    changeWidthContent(valueWidth?: string, valueHeight?: string): void;
}
