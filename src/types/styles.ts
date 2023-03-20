import { BtnType } from "./button";

export interface Styles {
    name?:string;
    variant:Variant[];
    defaultCss:string;
}

export interface Variant { 
    name:string;
    css:string;
}
export interface myProps {
    name:BtnType;
    value:string;
    hoverValue?:string;
    color?:string;
}