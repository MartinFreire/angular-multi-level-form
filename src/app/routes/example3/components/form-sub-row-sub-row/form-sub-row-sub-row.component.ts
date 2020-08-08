import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Example3FormService }                            from '../../example3-form.service';

@Component({
  selector: 'app-form-sub-row-sub-row',
  templateUrl: './form-sub-row-sub-row.component.html',
  styleUrls: ['./form-sub-row-sub-row.component.scss']
})
export class FormSubRowSubRowComponent implements OnInit {

  @Input() form;
  @Input() index;
  @Output() clickDelete = new EventEmitter<any>();

  constructor(private formSvc: Example3FormService) { }

  ngOnInit(): void {
  }

}
