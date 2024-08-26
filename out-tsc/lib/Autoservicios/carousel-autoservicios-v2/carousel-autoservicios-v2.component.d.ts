import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit } from "@angular/core";
export declare class CarouselAutoserviciosV2Component implements OnInit, AfterViewInit {
    private cdRef;
    widgetsContent: ElementRef;
    buttonLeft: boolean;
    buttonRight: boolean;
    scrollValue: number;
    showDegradent: boolean;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    scrollRight(): void;
    scrollLeft(): void;
    onResize(event: any): void;
    clearButton(): void;
}
