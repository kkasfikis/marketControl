import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormFieldBase } from './dynamic-form.models';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  toFormGroup(questions: FormFieldBase[] ) {
    const group: any = {};

    questions.forEach(formField => {
      let validators : Validators[] = [];

      if(formField.isRequired){ validators.push(Validators.required) }
      if(formField.maxLength > 0){ validators.push(Validators.maxLength(formField.maxLength))}
      if(formField.minLength > 0){ validators.push(Validators.minLength(formField.minLength))}
      if(formField.regexPattern && formField.regexPattern.length > 0){ validators.push(Validators.pattern(formField.regexPattern))}


      group[formField.key] = validators.length > 0 ? new FormControl(formField.value || '', validators as ValidatorFn[])
                                              : new FormControl(formField.value || '');
    });
    return new FormGroup(group);
  }
}
