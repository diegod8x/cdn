import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class WizardItemVerticalComponent implements OnInit, OnChanges {
    constructor();
    numStep: number;
    stepActual: number;
    stepVis: boolean;
    stepTitle: string;
    stepOffVisTitleGo: boolean;
    stepOffVisTitleGoBack: boolean;
    stepBodyOffVisGo: boolean;
    stepBodyOffVisGoBack: boolean;
    colorBg: string;
    lineVis: boolean;
    stepNum: number;
    actualStep: number;
    visStep: boolean;
    titleStep: string;
    titleVisOffStepGo: boolean;
    titleVisOffStepGoBack: boolean;
    visOffBodyStepGo: boolean;
    visOffBodyStepGoBack: boolean;
    bgColor: string;
    visLine: boolean;
    saveActiveEl: any | undefined;
    ngOnInit(): void;
    setWizardOpt(): void;
    getActiveElement(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
