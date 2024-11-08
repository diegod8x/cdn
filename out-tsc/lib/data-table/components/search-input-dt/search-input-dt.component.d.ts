import { EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
export declare class SearchInputDTComponent implements OnInit, OnChanges {
    infoSearch: any;
    styleWidthInput: any;
    eleRef: ElementRef;
    topDropdown: string;
    leftDropdown: string;
    commentsList: any;
    statusLinfo: boolean;
    itemCountActual: number;
    statusResp: boolean;
    set infoExt(value: any);
    icon: string;
    placeholder: string;
    widthInput: string;
    colorIcon: string;
    sizeIcon: string;
    listItemsComments: any;
    onEnter: EventEmitter<string>;
    onSpecificItem: EventEmitter<string>;
    comInpSearch: ElementRef;
    constructor(eleRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    determinateW(): void;
    defineColorAndDimentions(): void;
    onResize(event: any): void;
    onScroll(event: any): void;
    onKeydown(evt: KeyboardEvent): void;
    onKeydownHandler(evt: KeyboardEvent): void;
    orderNoRepeat(infoArray: any): unknown[];
    selectItemList(item: string): void;
    openComments(): void;
    closeComments(): void;
    verifyComments(info: string): void;
    cleanData(info: any): any;
    searchData(info: any): void;
}
