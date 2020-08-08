import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { CommonModule }      from '@angular/common';
import { SharedModule }      from '../shared/shared.module';
import { routes }            from './app-routing.module';
import { HomeComponent }     from './home/home.component';
import { Example1Component } from './example1/example1.component';
import { Example2Module }    from './example2/example2.module';
import { Example3Module }    from './example3/example3.module';


@NgModule({
  declarations: [
    HomeComponent,
    Example1Component,
  ],
  imports: [
    SharedModule,
    Example2Module,
    Example3Module,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
})
export class RoutesModule {
}
