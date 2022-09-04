import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldBase } from './dynamic-form.models';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormFieldBase[] | null = [];
  form!: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit(): void {
    this.form = this.formService.toFormGroup(this.formFields as FormFieldBase[]);
  }

}
