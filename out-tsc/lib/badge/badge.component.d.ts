import { OnInit } from '@angular/core';
export declare enum BadgeColors {
    bech_color = "bech_color",
    accent_color = "accent_color",
    accent_color2 = "accent_color2",
    accent_color3 = "accent_color3",
    green_color = "green_color",
    red_color = "red_color",
    cyan_color = "cyan_color",
    yellow_color = "yellow_color",
    yellow_color2 = "yellow_color2",
    celeste_001 = "celeste_001",
    celeste_002 = "celeste_002",
    celeste_003 = "celeste_003",
    magenta_color = "magenta_color",
    verde_001 = "verde_001",
    verde_002 = "verde_002",
    verde_003 = "verde_003",
    red_001 = "red_001",
    black_002 = "black_002",
    orange_003 = "orange_003"
}
export declare enum BadgeSizes {
    xlarge = "xlarge",
    large = "large",
    medium = "medium",
    small = "small",
    mini = "mini",
    micro = "micro"
}
export declare class BadgeComponent implements OnInit {
    color: BadgeColors;
    size: BadgeSizes;
    text: string;
    constructor();
    ngOnInit(): void;
    getClasses(): string[];
}
