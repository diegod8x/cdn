import { EventEmitter, OnInit } from '@angular/core';
export declare class SearchInputComponent implements OnInit {
    infoSearch: any;
    styleWidthInput: any;
    icon: string;
    placeholder: string;
    widthInput: string;
    colorIcon: string;
    onEnter: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    buscar(termino: any): void;
}
