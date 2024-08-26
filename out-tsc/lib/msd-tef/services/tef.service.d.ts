import { ContactsUser } from '../interfaces/tef.interface';
export declare class TefService {
    private _infosUsers;
    private _filterRadio;
    private _termSearchGlobal;
    _activedApp: boolean;
    _showApp: boolean;
    get termSearch(): string;
    get infosUserAll(): ContactsUser[];
    get finalUsersAll(): ContactsUser[];
    orderAllTitle(a: ContactsUser, b: ContactsUser): number;
    orderSubTitle(a: ContactsUser, b: ContactsUser): number;
    orderAllSubTitle(user: ContactsUser): number;
    constructor();
    receiveInfoUser(usersInfos: ContactsUser[]): void;
    setInfoUser(value: ContactsUser, index: number): void;
    sendInfoUser(index: number): ContactsUser;
    changeRadioSelected(value: string): void;
    searchTerm(term: string): void;
    showAppList(): void;
    userActiveApp(value: boolean): void;
}
