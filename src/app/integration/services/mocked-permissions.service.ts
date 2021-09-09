import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MockedPermissionsService {

  constructor() { }

  getPermissionsUser(): Observable<any> {
    return of(
      [
        {user: {id: '1', firstName: 'Homer', lastName: 'Simpson', ssn: '12345679'},
        role: 'Administrator'}
      ]
    )
  }
}
