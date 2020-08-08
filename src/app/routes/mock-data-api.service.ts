import { Injectable }               from '@angular/core';
import { MockData, MockDataObject } from '../shared/mock-data';
import { from, Observable }         from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MockDataApiService {

  getAll(): Observable<MockDataObject[]> {
    // Simulo proceso de llamada Http
    return from([MockData]);
  }

}
