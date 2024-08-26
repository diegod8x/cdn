import { ChangeDetectorRef, ElementRef, EventEmitter } from "@angular/core";
import { BottomSheetConfig } from "./utility/bottom-sheet.interface";
export declare class BottomSheetComponent {
    private changeDetector;
    flags: any;
    options: BottomSheetConfig;
    clickCloseModal: boolean;
    trapFocus: boolean;
    saveActiveEl: any | undefined;
    modalBtnSheet: ElementRef;
    onCloseModalBtn: EventEmitter<boolean>;
    constructor(changeDetector: ChangeDetectorRef);
    onKeydownHandler(event: any): void;
    ngOnInit(): void;
    getActiveElement(): void;
    open(): void;
    close(): void;
    closeOverlay(): void;
    toggle(): void;
}
