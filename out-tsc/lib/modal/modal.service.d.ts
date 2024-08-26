import { ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, Type, TemplateRef } from '@angular/core';
import { ModalConfig } from './modal-config';
import { ModalRef } from './modal-ref';
export declare type Content<T> = string | TemplateRef<T> | Type<T>;
export declare class ModalService {
    private resolver;
    private injector;
    private appRef;
    modalComponentRef: ComponentRef<any>;
    constructor(resolver: ComponentFactoryResolver, injector: Injector, appRef: ApplicationRef, document?: any);
    private _document?;
    open<T>(content: Content<T>, config: ModalConfig): ModalRef | undefined;
    resolveNgContent<T>(content: Content<T>, config: ModalConfig): ModalRef | undefined;
    close(): void;
}
