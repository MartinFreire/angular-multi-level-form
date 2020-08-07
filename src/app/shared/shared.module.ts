import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }                   from './material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule {
}
