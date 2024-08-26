import { OnInit } from '@angular/core';
import { CurrencyCLPPipe } from '../../pipes/currency-clp.pipe';
import { Products } from '../payment-methods.component';
export declare class AccountDetailsComponent implements OnInit {
    private currencyCLPPipe;
    cuenta: Products;
    titulo: any;
    availableBalance?: string;
    constructor(currencyCLPPipe: CurrencyCLPPipe);
    ngOnInit(): void;
}
