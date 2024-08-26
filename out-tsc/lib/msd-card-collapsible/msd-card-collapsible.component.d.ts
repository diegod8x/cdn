import { OnInit } from '@angular/core';
export declare class MsdCardCollapsibleComponent implements OnInit {
    cardTitle: string;
    cardContent: string;
    constructor();
    open: boolean;
    ngOnInit(): void;
    openCard(): void;
}
