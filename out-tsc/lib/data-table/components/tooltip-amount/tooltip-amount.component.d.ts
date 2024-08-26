import { OnInit, EventEmitter, ElementRef, OnChanges, DoCheck } from '@angular/core';
export declare class TooltipAmountComponent implements OnInit, OnChanges, DoCheck {
    statusOpen: boolean;
    countItems: number;
    amountPlus: number;
    listInfoMoves: any;
    onSendInfoAmount: EventEmitter<any>;
    topTooltip: number;
    leftTooltip: number;
    eleRef: ElementRef;
    openStatus: boolean;
    plusAmount: number;
    itemsCount: number;
    screenWidth: any;
    infoListMoves: any;
    constructor(eleRef: ElementRef);
    onResize(event: any): void;
    onScroll(event: any): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngDoCheck(): void;
    sendInfoAmount(opt: any): void;
    changePageInit(): void;
    formatClean(value: any): any;
    formatClp(value: any): string;
    formatMoney(value: any): any;
    msgT(): string;
}
