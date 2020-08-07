import { NgModule }              from '@angular/core';
import { FlexLayoutModule }      from '@angular/flex-layout';
import { CommonModule }          from '@angular/common';
import { MatInputModule }        from '@angular/material/input';
import { MatIconModule }         from '@angular/material/icon';
import { MatToolbarModule }      from '@angular/material/toolbar';
import { MatSidenavModule }      from '@angular/material/sidenav';
import { MatListModule }         from '@angular/material/list';
import { MatCardModule }         from '@angular/material/card';
import { MatButtonModule }       from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule }    from '@angular/material/form-field';
import { MatSelectModule }       from '@angular/material/select';
import { MatStepperModule }      from '@angular/material/stepper';
import { MatTableModule }        from '@angular/material/table';


import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE }                from '@angular/material/core';

const MATERIAL_MODULES = [
  FlexLayoutModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
  ]
})
export class MaterialModule {
}
