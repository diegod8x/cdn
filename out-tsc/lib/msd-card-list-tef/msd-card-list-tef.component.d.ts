import { AfterViewInit, OnChanges } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
export declare class MsdCardListTefComponent implements OnInit, AfterViewInit, OnChanges {
    private el;
    private renderer;
    avatarUser: string;
    contentLoaded: boolean;
    userAvatar: string;
    noUserAvatar: string;
    cardTitle: string;
    userApp: boolean;
    userName: string;
    userNick: string;
    userId: string;
    userAccount: string;
    cardListBtn: string;
    cardBkg: string;
    borderRadius: string;
    borderBottom: string;
    cardListContent: ElementRef;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
