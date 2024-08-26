import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
interface infoCard {
    id: number;
    tipoCuenta: string;
    numeroCuenta: string;
    totalcuenta: string;
    totalCargo: string;
    totalAbono: string;
}
export declare class CarouselAutoserviciosComponent implements OnInit {
    private _renderer;
    private _elementRef;
    buttonLeft: boolean;
    buttonRight: boolean;
    scrollValue: number;
    direction: number;
    activateButon: boolean;
    private swipeCoord?;
    private swipeTime?;
    arreglo: infoCard[];
    evento: EventEmitter<infoCard>;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    ngOnInit(): void;
    _addClickCallback(): void;
    loadCarrousel(): void;
    private _transitionCallback;
    private _nextCallback;
    private _prevCallback;
    private _getCardsRef;
    private _getCarouselRef;
    private _getSliderRef;
    private _getNextButtonRef;
    private _getPrevButtonRef;
    clickCard($event: any): void;
    swipe(e: TouchEvent, when: string): void;
    selectedItem: any;
    Selectedcard(id: any): void;
}
export {};
