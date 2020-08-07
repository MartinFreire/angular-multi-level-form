import { Component, OnDestroy, OnInit }      from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MockData, MockDataObject }          from '../../shared/mock-data';
import { from, Observable, Subscription } from 'rxjs';
import { switchMap }                      from 'rxjs/operators';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit, OnDestroy {

  data = MockData;
  subscriptions: Subscription[] = [];

  filteredItems$: Observable<MockDataObject[]>;

  form: FormGroup;
  formArray: FormArray;

  constructor() {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach( val => val?.unsubscribe ? val.unsubscribe() : null );
  }

  getFilteredItems(grupo): Observable<MockDataObject[]> {
    // Simulo proceso de llamada Http
    return from([
      this.data.filter( item => item.grupo.includes(grupo))
    ]);
  }

  clickAddRow() {
    const ctrl = this.buildFormRow();
    const form = this.form.get('fieldArray') as FormArray;
    form.push(ctrl);
  }

  clickAddSubRow(rowCtrl) {
    const ctrl = this.buildFormSubRow();
    const form = this.getRowArray(rowCtrl);
    form.push(ctrl);
  }

  clickDeleteSubRow(ctrl, index) {
    const formArr = this.getSubRowArray(ctrl);
    formArr.removeAt(index);
  }

  clickAddSubRowSubRow(rowCtrl) {
    const ctrl = this.buildFormSubRowSubRow();
    const form = this.getSubRowArray(rowCtrl);
    form.push(ctrl);
  }

  clickAddSubRowSubRowTypeB(rowCtrl) {
    const ctrl = this.buildFormSubRowSubRowTypeB();
    const form = this.getSubRowArray(rowCtrl);
    form.push(ctrl);
  }

  clickDeleteSubRowSubRow(ctrl, index) {
    const formArr = this.getSubRowArray(ctrl);
    formArr.removeAt(index);
  }

  buildForm() {
    const ctrl = new FormGroup({
      field1: new FormControl(null, []),
      field2: new FormControl(null, []),
      field3: new FormControl(null, []),
      fieldFirstName: new FormControl(null, []),
      fieldLastName: new FormControl(null, []),
      fieldArray: new FormArray([]),
    });

    this.filteredItems$ = ctrl.get('field2').valueChanges.pipe(
      switchMap( val => this.getFilteredItems(val))
    );

    this.subscriptions.push(ctrl.get('field3').valueChanges.subscribe( id => {
      const obj = this.data.find( item => item._id === id );
      if ( obj ) {
        this.form.patchValue( {
          fieldFirstName: obj.name.first,
          fieldLastName: obj.name.last
        });
      }
    }));

    this.form = ctrl;
    this.formArray = ctrl.get('fieldArray') as FormArray;
  }

  buildFormRow() {
    const ctrl = new FormGroup({
      rowField1: new FormControl(),
      rowField2: new FormControl(),
      rowField3: new FormControl(),
      rowSubArray: new FormArray([]),
    });
    return ctrl;
  }

  getRowArray(ctrl): FormArray {
    return ctrl.get('rowSubArray') as FormArray;
  }

  buildFormSubRow() {
    const ctrl = new FormGroup({
      subRowField1: new FormControl(),
      subRowField2: new FormControl(),
      subRowField3: new FormControl(),
      subRowArray: new FormArray([]),
    });
    return ctrl;
  }

  getSubRowArray(ctrl): FormArray {
    return ctrl.get('subRowArray') as FormArray;
  }

  buildFormSubRowSubRow() {
    const ctrl = new FormGroup({
      subRowSubRowField1: new FormControl(),
      subRowSubRowField2: new FormControl(),
      subRowSubRowField3: new FormControl(),
    });
    return ctrl;
  }

  buildFormSubRowSubRowTypeB() {
    const ctrl = new FormGroup({
      subRowSubRowField1TypeB: new FormControl(),
      subRowSubRowField2TypeBArray: new FormControl(),
    });
    return ctrl;
  }

  getSubRowSubRowTypeBArray(ctrl): FormArray {
    return ctrl.get('subRowSubRowField2TypeBArray') as FormArray;
  }

}
