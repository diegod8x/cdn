import { QueryList, AfterContentInit, OnInit } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
export declare class AccordionComponent implements AfterContentInit, OnInit {
    panels: QueryList<PanelComponent>;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    openPanel(panel: PanelComponent): void;
}
