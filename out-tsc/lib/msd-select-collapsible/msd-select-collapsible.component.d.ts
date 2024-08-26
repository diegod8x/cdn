import { EventEmitter, OnInit } from '@angular/core';
export interface SelectRadioItem {
    selectName?: string;
    selectId?: string;
    selectTitle?: string;
    selectChecked: boolean;
    selectValue?: any;
}
export declare class MsdSelectCollapsibleComponent implements OnInit {
    selectName: string;
    selectId: string;
    selectTitle: string;
    selectChecked: boolean;
    selectValue: any;
    selectRadio: EventEmitter<SelectRadioItem>;
    constructor();
    selectedRadio: SelectRadioItem;
    open: boolean;
    ngOnInit(): void;
    openSelect(): void;
    emitEvent(item: any): void;
}
