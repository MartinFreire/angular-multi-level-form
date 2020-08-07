import { NgModule }                       from '@angular/core';
import { SharedModule }                   from '../../shared/shared.module';
import { Example2Component }              from './example2.component';
import { FormRowComponent }               from './components/form-row/form-row.component';
import { FormSubRowComponent }            from './components/form-sub-row/form-sub-row.component';
import { FormSubRowSubRowComponent }      from './components/form-sub-row-sub-row/form-sub-row-sub-row.component';
import { FormSubRowSubRowTypeBComponent } from './components/form-sub-row-sub-row-type-b/form-sub-row-sub-row-type-b.component';


@NgModule({
  declarations: [
    Example2Component,
    FormRowComponent,
    FormSubRowComponent,
    FormSubRowSubRowComponent,
    FormSubRowSubRowTypeBComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    Example2Component,
  ],
  providers: [],
})
export class Example2Module {
}
