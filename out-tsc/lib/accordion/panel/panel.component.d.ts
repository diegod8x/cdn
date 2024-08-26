import { EventEmitter } from '@angular/core';
export declare class PanelComponent {
    msdIcon: string;
    opened: boolean;
    title: string;
    font: string;
    toggle: EventEmitter<any>;
    static panelCount: number;
    panelId: number;
    constructor();
}
