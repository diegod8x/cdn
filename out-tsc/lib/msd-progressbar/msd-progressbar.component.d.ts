import { EventEmitter, OnInit, Renderer2, SimpleChanges } from '@angular/core';
export interface Datos {
    id: number;
    percent: number;
}
export declare class MsdProgressbarComponent implements OnInit {
    private _render;
    datos: Datos[];
    progressId: number;
    percentIn: number;
    percentProgress: number;
    btnActive: boolean;
    btnNextAction: string;
    progressRemaining: boolean;
    statusEnd: boolean;
    addPercent: EventEmitter<any>;
    _addPercent: string;
    addBeneficiary: EventEmitter<string>;
    _addBeneficiary: string;
    deleteBeneficiary: EventEmitter<string>;
    _deleteBeneficiary: string;
    editBeneficiary: EventEmitter<string>;
    _editBeneficiary: string;
    getPercent: EventEmitter<string>;
    _getPercent: string;
    constructor(_render: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    resetPercentRest(): number;
    restante(event: any): number;
    addNew(): void;
    edit(event: any): void;
    delete(event: any): void;
}
