import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup }                           from '@angular/forms';
import { Example3FormService }                            from '../../example3-form.service';

@Component({
  selector: 'app-form-sub-row',
  templateUrl: './form-sub-row.component.html',
  styleUrls: ['./form-sub-row.component.scss']
})
export class FormSubRowComponent implements OnInit {

  @Input() index;
  @Input('form') set setForm( form: FormGroup ) {
    this.form = form;
    this.formArray = this.formSvc.getSubRowArray(form);
  }

  @Output() clickDelete = new EventEmitter<any>();

  form: FormGroup;
  formArray: FormArray;

  constructor(private formSvc: Example3FormService) {}

  ngOnInit(): void {
  }

  clickAddSubRow() {
    this.formSvc.clickAddSubRowSubRow(this.form);
  }

  clickAddSubRowTypeB() {
    this.formSvc.clickAddSubRowSubRowTypeB(this.form);
  }

  clickDeleteSubRow( index ) {
    this.formArray.removeAt(index);
  }

}
