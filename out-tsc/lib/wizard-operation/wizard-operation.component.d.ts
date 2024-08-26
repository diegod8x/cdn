import { OnInit, OnChanges, EventEmitter } from '@angular/core';
export declare class WizardOperationComponent implements OnInit, OnChanges {
    itemActual: number;
    backColor: string;
    onAddContact: EventEmitter<any>;
    constructor();
    actualItem: number;
    hBlck: any;
    topDimention: any;
    bttnDimention: any;
    colorBack: string;
    saveActiveEl: any | undefined;
    getActiveElement(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
}
