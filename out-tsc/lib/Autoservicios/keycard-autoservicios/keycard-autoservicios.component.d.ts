import { OnInit, QueryList } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
export declare class KeycardAutoserviciosComponent implements OnInit {
    private formBuilder;
    private formGroupDirective;
    BASE_ID: string;
    arrayKeys: Array<AbstractControl>;
    parentForm: FormGroup;
    numbersOfKey: number;
    parentNameForm: string;
    keysRef: QueryList<any>;
    constructor(formBuilder: FormBuilder, formGroupDirective: FormGroupDirective);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initializeKeys(): void;
    keyActionFocus(idControl: string, newValue: string): void;
}
