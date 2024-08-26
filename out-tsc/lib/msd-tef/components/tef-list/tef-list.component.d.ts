import { EventEmitter, OnInit } from '@angular/core';
import { ContactsUser } from '../../interfaces/tef.interface';
import { TefService } from './../../services/tef.service';
export declare class TefListComponent implements OnInit {
    _tefService: TefService;
    contentLoaded: boolean;
    usersTComponent: ContactsUser[];
    infoUser: ContactsUser;
    favUser: boolean;
    duplicateData: boolean;
    infoSearch: any;
    set usersTefComponent(contacts: ContactsUser[]);
    termSearch: string;
    set infoExt(value: any);
    outStart: EventEmitter<ContactsUser>;
    outEdit: EventEmitter<ContactsUser>;
    outTransfer: EventEmitter<ContactsUser>;
    constructor(_tefService: TefService);
    ngOnInit(): void;
    startFav(event: any, contact: ContactsUser, index: number): void;
    editContact(event: MouseEvent, user: ContactsUser, index: number): void;
    transferUser(event: any, user: ContactsUser, index: number): void;
    markStyleOther(info: any): any;
    markStyleRut(info: any): any;
    transferUserUnique(event: any, user: ContactsUser, index: number, item: number): void;
}
