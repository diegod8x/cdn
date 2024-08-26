import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
export declare class MsdOnboardingSliderComponent implements OnInit, AfterViewInit {
    config: any;
    maxWidth: number;
    slideSteps: ElementRef<HTMLElement>;
    listIndicator: ElementRef<HTMLElement>;
    footerBtns: ElementRef<HTMLElement>;
    currentStep: number;
    maximunWidth: number;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onResize(event: Event): void;
    nextSlide(e: number): void;
    prevSlide(e: number): void;
    private scrollTo;
    private paintIndicator;
    private updateMaxWidth;
    private showAlertA11y;
}
