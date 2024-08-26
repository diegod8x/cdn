import { OnInit, EventEmitter } from '@angular/core';
export interface RadioItem {
    label: any;
    isChecked: Boolean;
    orden?: Number;
    value: any;
}
export declare class SelectRadioComponent implements OnInit {
    items: Array<RadioItem>;
    grupo: string;
    textoRadio: any;
    onChecked: EventEmitter<RadioItem>;
    isLabelBold: boolean;
    set modeUseExt(value: boolean);
    set itemsDesactive(value: number[]);
    modeExt: boolean;
    disableItems: number[];
    constructor();
    ngOnInit(): void;
    selectedItem(selectItem: RadioItem): void;
    setChecked(posItem: number, checked: boolean): boolean;
    setDisable(posItem: number): boolean;
}
