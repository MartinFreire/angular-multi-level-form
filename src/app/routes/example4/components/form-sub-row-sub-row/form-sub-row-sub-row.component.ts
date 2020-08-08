import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-sub-row-sub-row',
  templateUrl: './form-sub-row-sub-row.component.html',
  styleUrls: ['./form-sub-row-sub-row.component.scss']
})
export class FormSubRowSubRowComponent implements OnInit {

  @Input() form;
  @Output() clickDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
