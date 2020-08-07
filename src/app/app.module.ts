import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { RouterModule }            from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }            from './app.component';
import { SharedModule }            from './shared/shared.module';
import { LayoutComponent }         from './layout/layout.component';
import { SideMenuComponent }       from './layout/side-menu/side-menu.component';
import { RoutesModule }            from './routes/routes.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([]),
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
