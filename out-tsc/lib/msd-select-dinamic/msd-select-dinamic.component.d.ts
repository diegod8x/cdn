import { OnInit, OnChanges, EventEmitter } from '@angular/core';
export declare class MsdSelectDinamicComponent implements OnInit, OnChanges {
    constructor();
    infoDataSelect: Array<any>;
    arrSelectSimple: boolean;
    propertyRelevant: string;
    typeOrder: string;
    onClick: EventEmitter<string>;
    selectDataInfo: any;
    simpleSelectArr: boolean;
    relevantProperty: string;
    orderType: string;
    actualItem: string;
    statusOpen: boolean;
    changeBorder: object;
    ngOnInit(): void;
    ngOnChanges(): void;
    setInfoFirstItem(): void;
    orderNoRepeat(infoArray: any): any;
    openToggle(): void;
    changeOptionsSelect(key: any, newItem: any): void;
}
