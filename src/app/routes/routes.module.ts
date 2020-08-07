import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { SharedModule }                   from '../shared/shared.module';
import { HomeComponent }                  from './home/home.component';
import { Example1Component }              from './example1/example1.component';
import { Example3Component }              from './example3/example3.component';
import { routes }                         from './app-routing.module';
import { CommonModule }                   from '@angular/common';
import { Example2Module }                 from './example2/example2.module';


@NgModule({
  declarations: [
    HomeComponent,
    Example1Component,
    Example3Component,
  ],
  imports: [
    SharedModule,
    Example2Module,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
})
export class RoutesModule {
}
