import { OnInit } from '@angular/core';
export declare class ProgressBarComponent implements OnInit {
    porcentage: number;
    label: string;
    follow: boolean;
    iconfollow: string;
    colorBar: string;
    iconGo: boolean;
    constructor();
    ngOnInit(): void;
    porcentageControl(porcentage: number): void;
    getRaceIcon(): void;
}
