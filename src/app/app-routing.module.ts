import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesListComponent} from "./sales/sales-list/sales-list.component";
import {UsersListComponent} from "./users/users-list/users-list.component";

const routes: Routes = [
  {
    path: 'sales', component: SalesListComponent
  },
  {
    path: 'users', component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
