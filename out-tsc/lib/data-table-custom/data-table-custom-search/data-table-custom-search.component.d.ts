import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class DataTableCustomSearchComponent implements OnInit, OnChanges {
    filterList: FormControl;
    showDeleteIcon: boolean;
    searchEmmitter: EventEmitter<String>;
    formValue: boolean;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    keyPressAlphaNumeric(event: any): boolean;
    detectValue(e: any): void;
    deleteValues(): void;
}
