import { OnInit } from '@angular/core';
export declare class CheckComponent implements OnInit {
    check: any;
    name: string;
    textoCheck: any;
    subtextCheck: any;
    checkId: string;
    set statusDis(value: boolean);
    disStatus: boolean;
    constructor();
    ngOnInit(): void;
}
