import { EventEmitter, OnInit, OnChanges, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ContactsUser } from "./interfaces/tef.interface";
import { TefService } from "./services/tef.service";
export declare class MsdTefComponent implements OnInit, OnChanges {
    tefService: TefService;
    private _fb;
    usersTef: ContactsUser[];
    userToTransfer: ContactsUser;
    desktop: boolean;
    appActived: boolean;
    showApp: boolean;
    toHighlight: string;
    refreshSearch: boolean;
    userSearchInput: ElementRef<HTMLInputElement>;
    btnSwitch: ElementRef;
    test1: ElementRef;
    test2: ElementRef;
    formSearch: FormGroup;
    formOderBy: FormGroup;
    formContactApp: FormGroup;
    termSearchGeneral: any;
    placeholder: string;
    set contacts(contact: ContactsUser[]);
    set userAppIn(value: boolean);
    outUserStart: EventEmitter<ContactsUser>;
    outUserEdit: EventEmitter<ContactsUser>;
    outUserTransfer: EventEmitter<ContactsUser>;
    outRepeatTef: EventEmitter<string>;
    constructor(tefService: TefService, _fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    sizeChange(event: any): void;
    startUser(contact: ContactsUser): void;
    editUser(contact: ContactsUser): void;
    transferUser(contact: ContactsUser): void;
    transferUserClear(): void;
    changeFilter(event: any): void;
    changeFilterEnter(posRadio: number): void;
    repeatTef(): void;
    onlyAlphaNumb(event: KeyboardEvent): boolean;
    searchUser(): void;
    userAppSelected(): void;
    userAppSelectedEnter(): void;
}
