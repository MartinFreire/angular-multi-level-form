import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup }          from '@angular/forms';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss']
})
export class FormRowComponent implements OnInit {

  @Input() form;
  @Input() getRowArray: ( ctrl ) => FormGroup;
  @Output() clickDelete       = new EventEmitter<FormGroup>();
  @Output() clickAddSubRow    = new EventEmitter<FormGroup>();

  @Input() getSubRowArray: ( ctrl ) => FormArray;
  @Output() clickSubRowDelete         = new EventEmitter<{ ctrl: AbstractControl, idx: number }>();
  @Output() clickSubRowAddSubRow      = new EventEmitter<FormGroup>();
  @Output() clickSubRowAddSubRowTypeB = new EventEmitter<FormGroup>();
  @Output() clickSubRowDeleteSubRow   = new EventEmitter<{ ctrl: AbstractControl, idx: number }>();


  constructor() {
  }

  ngOnInit(): void {
  }

}
