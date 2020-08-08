import { NgModule }                       from '@angular/core';
import { SharedModule }      from '../../shared/shared.module';
import { Example4Component } from './example3.component';
import { FormRowComponent }  from './components/form-row/form-row.component';
import { FormSubRowComponent }            from './components/form-sub-row/form-sub-row.component';
import { FormSubRowSubRowComponent }      from './components/form-sub-row-sub-row/form-sub-row-sub-row.component';
import { FormSubRowSubRowTypeBComponent } from './components/form-sub-row-sub-row-type-b/form-sub-row-sub-row-type-b.component';


@NgModule({
  declarations: [
    Example4Component,
    FormRowComponent,
    FormSubRowComponent,
    FormSubRowSubRowComponent,
    FormSubRowSubRowTypeBComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    Example4Component,
    FormRowComponent,
  ],
  providers: [],
})
export class Example4Module {
}
