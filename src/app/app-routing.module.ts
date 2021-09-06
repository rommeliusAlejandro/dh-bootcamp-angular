import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesListComponent} from "./sales/sales-list/sales-list.component";
import {UsersListComponent} from "./users/users-list/users-list.component";
import {InternalComponent} from "./sales/internal/internal.component";
import {ExternalComponent} from "./sales/external/external.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthChildGuard} from "./shared/guards/auth-child.guard";
import {HasChangesGuard} from "./shared/guards/has-changes.guard";
import {GetExternalSalesGuard} from "./shared/guards/get.external-sales.guard";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'sales', component: SalesListComponent,
    children: [
      {
        path: '', canActivateChild: [AuthChildGuard],
        children: [
          { path: 'internal', component: InternalComponent},
          { path: 'external', component: ExternalComponent, resolve: {sales: GetExternalSalesGuard}}
        ]
      }
    ]
  },
  {
    path: 'users', component: UsersListComponent, canActivate: [AuthGuard], canDeactivate: [HasChangesGuard]
  },
  {
    path: 'users/:id', component: UsersListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
