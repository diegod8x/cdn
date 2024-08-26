import { ElementRef, OnInit } from '@angular/core';
export declare class FavoriteCardModalTutorialComponent implements OnInit {
    private eleRef;
    tutorialModal: ElementRef;
    contTooltip: ElementRef;
    statusOpen: boolean;
    constructor(eleRef: ElementRef);
    onKeydown(evt: KeyboardEvent): void;
    ngOnInit(): void;
    determinateD(): boolean;
    changeStatusOpen(): void;
    openModalStar(): void;
    closeModalStar(): void;
}
