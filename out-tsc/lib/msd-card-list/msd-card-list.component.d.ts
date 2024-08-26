import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class MsdCardListComponent implements OnInit {
    private el;
    private renderer;
    cardListAvatar: string;
    cardListTitle: string;
    cardListComent: string;
    cardListSubTitle: string;
    cardListBtn: string;
    cardListBkg: string;
    needBorder: string;
    cardListContent: ElementRef;
    contentLoaded: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
