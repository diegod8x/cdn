import { OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
export declare class AnimationsComponent implements OnInit {
    animacion: string;
    height: number;
    width: number;
    animationLoop: boolean;
    screenHeight: number;
    screenWidth: number;
    config: AnimationOptions;
    constructor();
    ngOnInit(): void;
    getScreenSize(event?: any): void;
}
