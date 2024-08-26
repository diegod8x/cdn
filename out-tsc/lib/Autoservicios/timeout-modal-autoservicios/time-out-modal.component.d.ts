import { OnInit } from "@angular/core";
import { TimeOutModalService } from "./time-out-modal.service";
export declare class TimeOutModalComponent implements OnInit {
    private _timeOutModalService;
    modalTime: number;
    constructor(_timeOutModalService: TimeOutModalService);
    ngOnInit(): void;
    beHere(): void;
}
