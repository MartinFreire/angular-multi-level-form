import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup }          from '@angular/forms';
import { Example3FormService }                            from '../../../example3/example3-form.service';

@Component({
  selector: 'form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss']
})
export class FormRowComponent implements OnInit {

  @Input() index;
  @Input('form') set setForm( form: FormGroup ) {
    this.form = form;
    this.formArray = this.formSvc.getRowArray(form);
  }

  @Output() clickDelete = new EventEmitter<any>();

  form: FormGroup;
  formArray: FormArray;

  constructor(private formSvc: Example3FormService) {
  }

  ngOnInit(): void {
  }

  clickAddSubRow() {
    this.formSvc.clickAddSubRow(this.form);
  }

  clickDeleteSubRow(index) {
    this.formArray.removeAt(index);
  }

}
