import { OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class MsdClickListComponent implements OnInit {
    switchNgModel: NgModel;
    clickList: any[];
    switchState: EventEmitter<any>;
    clickBtn: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    getStatus(listIndex: number, index: number, e: any): void;
    sendInfo(e: any): void;
}
