import { OnInit } from '@angular/core';
import "hammerjs";
import { AnimationOptions } from 'ngx-lottie';
export declare class OnboardingComponent implements OnInit {
    anim: any;
    config: any;
    hasBottomButton: boolean;
    height: number;
    width: number;
    screenHeight: any;
    screenWidth: any;
    sliderConfig: Array<AnimationOptions>;
    indexSlider: number;
    constructor();
    ngOnInit(): void;
    getScreenSize(event?: any): void;
    nextSlider(): void;
    previousSlider(): void;
    handleAnimation(anima: any, i: any): void;
}
