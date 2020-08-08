import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'code-link',
  templateUrl: './code-link.component.html',
  styleUrls: ['./code-link.component.scss']
})
export class CodeLinkComponent implements OnInit {

  @Input() path;

  constructor() { }

  ngOnInit(): void {
  }

}
