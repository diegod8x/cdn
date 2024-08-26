import { EventEmitter, OnInit } from '@angular/core';
declare type EspecialKey = 'delete';
export declare class NumpadAutoserviciosComponent implements OnInit {
    keyPressEventEmitter: EventEmitter<string>;
    configKeys: Array<string | EspecialKey>;
    constructor();
    ngOnInit(): void;
    numClick(value: string): void;
}
export {};
