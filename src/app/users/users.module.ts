import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {IntegrationModule} from "../integration/integration.module";



@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    IntegrationModule
  ]
})
export class UsersModule { }
