import { BehaviorSubject } from "rxjs";
import { TimeOutModalConfig } from "./interfaces/time-out-modal.model";
export declare class TimeOutModalService {
    /** Indicador de apertura del modal*/
    showModal: BehaviorSubject<boolean>;
    /** Indicador de limite de apertura alcanzado (Clear Timer)*/
    limitedModal: BehaviorSubject<boolean>;
    /** Indicador de cantidad de modal cerrados */
    closedModal: BehaviorSubject<boolean>;
    /** Indicador de tiempo de cuenta atras del modal */
    modalTime: BehaviorSubject<number>;
    /** Indicador de cantidad interaciones del usuario con el modal (button event [click]) */
    modalInteractionCount: BehaviorSubject<number>;
    private openingCount;
    private idleTime;
    private idleInterval;
    private countDown;
    private toBlock;
    private originModalTime;
    private openingIntervalTime;
    private openingLimit;
    /**
     * Inicializa el timeout según la configuración especificada.
     * @param config timeout configuración.
     */
    init: (config: TimeOutModalConfig) => void;
    /**
     * Bloquea/desbloquea el tiempo de apertura del modal.
     * @param block bloquear
     */
    block: (block: boolean) => void;
    /** Reinicia el tiempo de apertura del modal. */
    resetTime: () => void;
    /** Handler del botón del modal. cierra el modal.  */
    onClick: () => void;
    /** Cierra el modal y inicializa el tiempo de la siguiente apertura. */
    close: () => void;
    /** Elimina el timeout */
    clear(): void;
}
