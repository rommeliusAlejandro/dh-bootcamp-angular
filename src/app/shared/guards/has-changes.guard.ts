import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersListComponent} from "../../users/users-list/users-list.component";

@Injectable({
  providedIn: 'root'
})
export class HasChangesGuard implements CanDeactivate<UsersListComponent> {
  canDeactivate(
    component: UsersListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {

    const confirm = window.confirm(`Are you sure? `);

    if(!confirm) {
      return false;
    }

    return true;
  }

}
