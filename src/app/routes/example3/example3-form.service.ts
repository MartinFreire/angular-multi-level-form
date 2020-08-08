import { Injectable, OnDestroy, OnInit }     from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { from, Observable, Subscription }    from 'rxjs';
import { MockDataObject }                    from '../../shared/mock-data';
import { switchMap }                         from 'rxjs/operators';


@Injectable()
export class Example3FormService implements OnDestroy{

  readonly form: FormGroup = this.buildForm();

  subscriptions: Subscription[] = [];


  constructor() {
  }

  ngOnDestroy() {
    console.log('Service On Destroy');
    this.subscriptions.forEach( val => val?.unsubscribe ? val.unsubscribe() : null );
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

    return ctrl;
  }

  setupInternalField(getData: (id) => MockDataObject) {
    this.subscriptions.push(this.form.get('field3').valueChanges.subscribe( id => {
      const obj = getData(id);
      if ( obj ) {
        this.form.patchValue( {
          fieldFirstName: obj.name.first,
          fieldLastName: obj.name.last
        });
      }
    }));
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
