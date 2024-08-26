import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class ShowAllSelectComponent implements OnInit {
    dataShowDropDown: any[];
    onClickShowSelect: EventEmitter<any>;
    dropmenu: ElementRef;
    set infoExt(value: any);
    nameSelectedMenu: string;
    top: number;
    left: number;
    statusOpen: boolean;
    constructor();
    ngOnInit(): void;
    onResize(event: any): void;
    onScroll(event: any): void;
    onKeydownHandler(evt: KeyboardEvent): void;
    onChangeSelect(itemName: string): void;
    toggle(): void;
    open(): void;
    close(): void;
    convertCamelCase(info: string): string;
}
