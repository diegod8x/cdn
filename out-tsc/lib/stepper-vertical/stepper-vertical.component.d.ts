import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class StepperVerticalComponent implements OnInit {
    cdr: ChangeDetectorRef;
    stages: any[];
    stagesDetail: any[];
    opened: boolean;
    openMenu: boolean;
    responseLink: EventEmitter<any>;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    toggleClass(event: any, status: string): void;
    actClass(state: string): boolean;
    openMenuFuncion(value: any): void;
}
