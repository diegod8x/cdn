import { OnInit, SimpleChanges } from '@angular/core';
export declare class MsdCircularStepperComponent implements OnInit {
    stepActual: string;
    stepTotal: string;
    tituloStep: string;
    siguienteStep: string;
    value: number;
    circumference: number;
    strokeDashoffset: number;
    ngOnChanges(changes: SimpleChanges): void;
    onPercentageChanged(val: number): void;
    constructor();
    ngOnInit(): void;
}
