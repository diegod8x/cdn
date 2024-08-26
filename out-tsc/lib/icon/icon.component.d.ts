import { ElementRef, Renderer2 } from '@angular/core';
export declare class IconComponent {
    private el;
    private renderer;
    set name(iconName: string);
    size: string;
    width: string;
    color: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
