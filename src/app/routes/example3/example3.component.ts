import { Component, OnInit }      from '@angular/core';
import { FormArray, FormGroup }   from '@angular/forms';
import { MockDataObject }                    from '../../shared/mock-data';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Example3FormService }               from './example3-form.service';
import { MockDataApiService }          from '../mock-data-api.service';
import { filter, map, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
  providers: [Example3FormService]
})
export class Example3Component implements OnInit {

  filteredItems$: Observable<MockDataObject[]>;

  form: FormGroup;
  formArray: FormArray;

  dataCache = new BehaviorSubject<MockDataObject[]>([]);

  constructor( private formSvc: Example3FormService, private apiSvc: MockDataApiService ) {
    this.form      = formSvc.form;
    this.formArray = formSvc.form.get('fieldArray') as FormArray;
  }

  ngOnInit(): void {
    this.formSvc.setupInternalField( id => {
      return this.dataCache.getValue().find(item => item._id === id);
    });

    this.filteredItems$ = this.form.get('field2').valueChanges.pipe(
      switchMap(val => this.getFilteredItems(val))
    );
  }

  getFilteredItems( grupo ): Observable<MockDataObject[]> {
    return this.apiSvc.getAll().pipe(
      tap( items => this.dataCache.next(items)),
      map(items => items.filter(item => item.grupo.includes(grupo)))
    );
  }

  clickAddRow() {
    this.formSvc.clickAddRow();
  }

  clickDeleteSubRow( index ) {
    this.formArray.removeAt(index);
  }

}
