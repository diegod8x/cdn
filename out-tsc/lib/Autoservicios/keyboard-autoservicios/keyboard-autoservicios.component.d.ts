import { AfterContentInit, DoCheck, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class KeyboardAutoserviciosComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
    emailHint: boolean;
    btnActive: boolean;
    inputValue: any;
    keyPressEventEmitter: EventEmitter<string>;
    mail1: string;
    mail2: string;
    mail3: string;
    dataInput: any;
    pressKey: EventEmitter<string>;
    _pressKey: string;
    pressDelete: EventEmitter<string>;
    _pressDelete: string;
    keyNextAction: EventEmitter<string>;
    _nextAction: string;
    hintMail: EventEmitter<string>;
    _hintMail: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    optionMail(mail: any): Promise<void>;
    optionKey(value?: string): Promise<void>;
    optionDelete(event: any): void;
    btnNextAction(event: any): void;
}
