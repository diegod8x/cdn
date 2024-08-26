import { ComponentFactoryResolver, Injector, Type, TemplateRef } from '@angular/core';
export declare type Content<T> = string | TemplateRef<T> | Type<T>;
export declare class MenuService {
    private resolver;
    private injector;
    element: any;
    private _document?;
    constructor(resolver: ComponentFactoryResolver, injector: Injector, document?: any);
    open<T>(content: Content<T>): void;
    resolveNgContent<T>(content: Content<T>): any[][];
    close(): void;
}
