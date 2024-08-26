import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface Products {
    operationId: string;
    mnemonic: string;
    availableBalance: number;
    lcmnemonic: string;
    lcavailableBalance: number;
    isDisabled: boolean;
}
export declare class PaymentMethodsComponent implements OnInit {
    menu: any;
    label: string;
    control: FormControl;
    productos: Products[];
    saldoTitulo: string;
    defaultProducto: Products;
    showLineaCredito: boolean;
    spinner: boolean;
    message: string;
    constructor();
    ngOnInit(): void;
    toggleCtasCargo(): void;
    receiveMessage($event: any): void;
}
