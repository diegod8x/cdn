import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from "@angular/core";
export declare class CarruselOnboardingComponent implements OnInit, AfterViewInit {
    private cdRef;
    private renderer;
    private el;
    id_chevron_left?: string;
    id_chevron_right?: string;
    widgetsContent: ElementRef;
    dotList: ElementRef;
    buttonLeft: boolean;
    buttonRight: boolean;
    scrollValue: number;
    carrusel: any[];
    selected: number;
    actualWidth: number;
    delayOff: boolean;
    randNumberID: number;
    private intersectionObserver;
    constructor(cdRef: ChangeDetectorRef, renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onResize(event: any): void;
    getCardList(): void;
    resetCarousel(): void;
    scrollCards(direction: string): void;
    paintIndicator(selected: number): void;
    controlButtons(): void;
}
