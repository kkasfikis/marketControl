import { Validator } from "@angular/forms";

export interface FormFieldBase{
    value : string;
    type : string;
    key : string;
    label : string;
    options : {key:string,value:string}[]
    //=====Validators=======
    isRequired : boolean;
    minLength : number;
    maxLength : number;
    regexPattern : string;
    //====/Validators=======
    //=====Styling==========
    order : number;
    width : number;
    align : string;
    //=====/Styling=========
}