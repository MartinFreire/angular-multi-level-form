import { Routes }            from '@angular/router';
import { LayoutComponent }   from '../layout/layout.component';
import { HomeComponent }     from './home/home.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'example1', component: Example1Component },
      { path: 'example2', component: Example2Component },
      { path: 'example3', component: Example3Component },
    ]
  }
];
