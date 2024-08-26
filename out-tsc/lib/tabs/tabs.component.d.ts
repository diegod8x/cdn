import { QueryList, AfterContentInit, EventEmitter, ElementRef } from '@angular/core';
import { TabComponent } from './component/tab.component';
export declare class TabsComponent implements AfterContentInit {
    private elRef;
    tabs: QueryList<TabComponent>;
    tabindex: EventEmitter<number>;
    tabsMobile: boolean;
    opened: boolean;
    vertActive: boolean;
    firstTwoTablist: any[];
    dropDownTablist: any[];
    selectedIndex: number;
    tabDropBtn: ElementRef;
    handleClickOutside(event: Event): void;
    onWindowResize(event: Event): void;
    constructor(elRef: ElementRef);
    ngAfterContentInit(): void;
    selectTab(tab: any, index: number): void;
    groupTabsMobile(): void;
    actionMobile(): void;
    toggleDrop(event: Event): void;
    getDropActive(): void;
    handleKeyboardEvent(event: KeyboardEvent): void;
}
