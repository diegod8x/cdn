import { OnInit } from '@angular/core';
export declare class DownloadDropdownComponent implements OnInit {
    titleDownload: string;
    iconLeftDownload: string;
    iconRightDownload: string;
    sizeIcon: any;
    colorIconLeft: string;
    colorIconRight: string;
    widthInputDrop: string;
    left: string;
    right: string;
    top: string;
    bottom: string;
    displayInputDrop: string;
    heightInputDrop: string;
    typeOrder: string;
    upMode: boolean;
    active_drop: boolean;
    constructor();
    ngOnInit(): void;
    open(): void;
    close(): void;
    toggle(): void;
    onResize(event: any): void;
    onKeydownHandler(evt: KeyboardEvent): void;
}
