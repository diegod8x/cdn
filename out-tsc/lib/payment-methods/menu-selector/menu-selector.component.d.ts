import { EventEmitter, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Products } from '../payment-methods.component';
export declare class MenuSelectorComponent implements OnInit, OnChanges {
    cuentas: Products[];
    total: number;
    defaultProducto: Products;
    messageEvent: EventEmitter<string>;
    showLineaCredito: boolean;
    saldoTitulo: string;
    totalValue: number;
    isDisabled: boolean;
    show: boolean;
    valorRadio: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    hideComponent(): void;
    showComponent(): void;
    sendMessage(cuenta: any): void;
}
