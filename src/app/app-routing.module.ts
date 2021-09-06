import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesListComponent} from "./sales/sales-list/sales-list.component";
import {UsersListComponent} from "./users/users-list/users-list.component";
import {InternalComponent} from "./sales/internal/internal.component";
import {ExternalComponent} from "./sales/external/external.component";

const routes: Routes = [
  {
    path: 'sales', component: SalesListComponent,
    children: [
      { path: 'internal', component: InternalComponent},
      { path: 'external', component: ExternalComponent}
    ]
  },
  {
    path: 'users', component: UsersListComponent
  },
  {
    path: 'users/:id', component: UsersListComponent
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
