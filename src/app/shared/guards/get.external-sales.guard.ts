import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetExternalSalesGuard implements Resolve<string[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {

    return of([
      'Paper', 'Books', 'Pencils', 'Desk'
    ])

  }

}
