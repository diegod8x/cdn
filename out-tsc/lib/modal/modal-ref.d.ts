import { Observable } from 'rxjs';
export declare class ModalRef {
    private readonly _afterClosed;
    afterClosed: Observable<any>;
    constructor();
    close(result?: any): void;
}
