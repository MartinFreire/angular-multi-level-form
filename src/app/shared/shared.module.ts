import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }                   from './material.module';
import { DividerComponent } from './components/divider/divider.component';
import { CodeLinkComponent }  from './components/code-link/code-link.component';
import { FillSpaceComponent } from './components/fill-space.component';


@NgModule({
  declarations: [
    DividerComponent,
    CodeLinkComponent,
    FillSpaceComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DividerComponent,
    CodeLinkComponent,
    FillSpaceComponent,
  ]
})
export class SharedModule {
}
