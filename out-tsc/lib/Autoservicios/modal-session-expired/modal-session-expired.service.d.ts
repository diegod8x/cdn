import { BehaviorSubject } from "rxjs";
import { ModalSessionExpiredConfig } from "./interfaces/modal-session-expired.model";
export declare class ModalSessionExpiredService {
    /** Indicador de tiempo de cuenta atras del modal */
    modalTimeSessionExpired: BehaviorSubject<number>;
    /** Indicador de modal cerrado */
    closedModalSessionExpired: BehaviorSubject<boolean>;
    private countDown;
    init: (config: ModalSessionExpiredConfig) => void;
    exit: () => void;
    close: () => void;
}
