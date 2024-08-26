export interface DemoMockMsdTef {
    avatarTef?: string;
    titleTef?: string;
    subtitleTef?: string;
    accountTef?: string;
    favStart?: boolean;
    rut?: string;
    app?: boolean;
    email?: string;
    fono?: string;
    bankAccAlias?: AccAlias[];
}
export interface AccAlias {
    subtitleTef?: string;
    bankTef?: string;
    accountName?: string;
    accountTef?: string;
    app?: boolean;
    favStart?: boolean;
}
