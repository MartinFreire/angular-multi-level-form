import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup }                           from '@angular/forms';

@Component({
  selector: 'app-form-sub-row',
  templateUrl: './form-sub-row.component.html',
  styleUrls: ['./form-sub-row.component.scss']
})
export class FormSubRowComponent implements OnInit {

  @Input() form;
  @Input() getSubRowArray: (ctrl) => FormArray;
  @Output() clickDelete = new EventEmitter<number>();
  @Output() clickAddSubRow = new EventEmitter<FormGroup>();
  @Output() clickAddSubRowTypeB = new EventEmitter<FormGroup>();
  @Output() clickDeleteSubRow = new EventEmitter<{ ctrl: FormGroup, idx: number}>();

  constructor() { }

  ngOnInit(): void {
  }

}
