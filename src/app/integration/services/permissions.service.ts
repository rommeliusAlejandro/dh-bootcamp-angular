import { Injectable } from '@angular/core';
import {UsersService} from "./users.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private readonly usersService: UsersService
  ) { }

  getPermissionsUser(): Observable<any> {
    return this.usersService.getUsers().pipe(
      map(users => {
        return users.map(user => {
          return {user, role: 'Administrator'}
        })
      })
    )
  }

}
