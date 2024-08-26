import { OnInit, QueryList, EventEmitter } from '@angular/core';
import { TemplateHeaderDirective } from './directives/template-header.directive';
export declare class DataTableCustomComponent implements OnInit {
    TEMPLATE: {
        header: string;
        body: string;
    };
    templates: QueryList<TemplateHeaderDirective>;
    headers: [];
    data: any[];
    rowsPerPage: number;
    titleShowMoreBtn: string;
    doSort: boolean;
    filterData: EventEmitter<any>;
    dataLength: number;
    newRowPerPage: number;
    showMoreCountDown: number;
    showMoreClickCount: number;
    disabledMore: boolean;
    localData: any;
    findCounter: number;
    searchMessage: boolean;
    searchValue: boolean;
    searchValueString: string;
    constructor();
    ngOnInit(): void;
    calculateRowsPerPage(): void;
    showMoreRows(): void;
    handleSearch(value: string): void;
    resetAll(): void;
    clearSearch(): void;
    downAll(): void;
    highLigthCode(value: string): void;
    clearHighlight(): void;
    headerSort(): void;
}
