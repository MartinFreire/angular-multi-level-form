import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-sub-row-sub-row-type-b',
  templateUrl: './form-sub-row-sub-row-type-b.component.html',
  styleUrls: ['./form-sub-row-sub-row-type-b.component.scss']
})
export class FormSubRowSubRowTypeBComponent implements OnInit {

  @Input() form;
  @Output() clickDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
