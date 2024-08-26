import { EventEmitter, OnInit } from '@angular/core';
interface Config {
    show: boolean;
    text: string;
}
interface ButtonConfig {
    return: Config;
    help: Config;
    init: Config;
    exit: Config;
    call: Config;
    showMore: Config;
}
export declare class FooterAutoserviciosComponent implements OnInit {
    buttonConfig: ButtonConfig;
    accion: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    buttonAction(event: any): void;
}
export {};
