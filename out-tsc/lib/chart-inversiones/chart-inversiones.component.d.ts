import { OnInit } from '@angular/core';
export declare class ChartInversionesComponent implements OnInit {
    productos: any[];
    total: number;
    constructor();
    ngOnInit(): void;
    porcentajeProducto(monto: any): string;
}
