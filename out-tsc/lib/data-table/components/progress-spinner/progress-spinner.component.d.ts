import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class ProgressSpinnerComponent implements OnInit {
    private render;
    textTitle: string;
    withContainer: string;
    heightContainer: string;
    stroke: string;
    radio: string;
    fill: string;
    strokeWidth: string;
    left: string;
    top: string;
    circleConfig: ElementRef;
    positionCircle: Object;
    containerSpinner: Object;
    constructor(render: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
