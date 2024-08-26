export declare class Sort {
    private sortOrder;
    private collator;
    constructor();
    startSort(property: any, order: any, type?: string): (a: any, b: any) => number;
    private sortData;
}
