import { OnInit, ElementRef, OnChanges, EventEmitter, Renderer2 } from '@angular/core';
export declare class SelectDinamicMixValComponent implements OnInit, OnChanges {
    private eleRef;
    private _render;
    constructor(eleRef: ElementRef, _render: Renderer2);
    infoDataSelect: Array<any>;
    propertyRelevant: string;
    propertyMatchDesc: string;
    statusDoubleCharge: boolean;
    onClick: EventEmitter<string>;
    infoUlList: ElementRef;
    dropContent: ElementRef;
    set infoExt(value: any);
    onKeydown(evt: KeyboardEvent): void;
    onResize(event: any): void;
    onScroll(event: any): void;
    selectDataInfo: any;
    simpleSelectArr: boolean;
    relevantProperty: string;
    orderType: string;
    actualItem: string;
    statusOpen: boolean;
    topUl: number;
    leftUl: number;
    widthUl: number;
    descMatchProperty: string;
    itemImportant: any;
    statusLText: any;
    statusChange: boolean;
    actualInfo: any;
    ngOnInit(): void;
    ngOnChanges(): void;
    setInfoFirstItem(): void;
    setInfo(info: any): void;
    convertCamelCase(info: string): string;
    openToggle(): void;
    open(): void;
    close(): void;
    determinateDimentions(): void;
    verifyOptionAll(infoArr: any): any;
    newText(info: any): any;
    newTextUlLi(info: any): any;
    changeOptionsSelect(...newItem: any[]): void;
}