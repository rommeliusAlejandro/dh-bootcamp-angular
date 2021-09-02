import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(): Observable<User[]> {
    return of([
      {
        id: '1',
        firstName: 'Rommel',
        lastName: 'Loayza',
        ssn: '1234567'
      },
      {
        id: '2',
        firstName: 'Surimana',
        lastName: 'Ponce',
        ssn: '98765432'
      }
    ])
  }


}
