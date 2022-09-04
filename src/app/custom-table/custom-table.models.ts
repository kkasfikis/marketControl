import { EventEmitter } from "@angular/core";

export interface Table{
    isEnabled : boolean;
    isFilterable : boolean;
    defaultPageSize : number;
}

export interface TableColumn{
    name: string;
    text: string;
    order: number;
    isSortable: boolean;
    isFilterable: boolean;
    backgroundColor : boolean;
}

export interface TableRow{
    image: string;
    values : TableRowColumnValue[];
    actions : TableRowAction[];
}

export interface TableRowColumnValue{
    column : TableColumn;
    value : string;
    backgroundColor : boolean;
}

export interface TableRowAction{
    name : string;
    callbackFunc : (args:any)=>void;
    icon : string;
    tooltip : string;
    color : string;
}