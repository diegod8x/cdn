import { OnInit, ElementRef } from '@angular/core';
export declare class MsdTooltipComponent implements OnInit {
    placement: string;
    msdIcon: string;
    size: string;
    color: string;
    ariaLabel: string;
    tooltipId: string;
    tooltipContentId: string;
    mytoolTipContent: ElementRef;
    onKeydownHandler(event: KeyboardEvent): void;
    constructor();
    private generateUniqueId;
    ngOnInit(): void;
    showMe(): void;
    hideMe(): void;
}
