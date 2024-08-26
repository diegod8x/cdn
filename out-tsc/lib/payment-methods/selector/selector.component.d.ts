import { OnInit } from '@angular/core';
import { Products } from '../payment-methods.component';
export declare class SelectorComponent implements OnInit {
    cuenta: Products;
    defaultProducto: Products;
    cantidadDeCuentas: number;
    saldoTitulo?: any;
    constructor();
    ngOnInit(): void;
}
