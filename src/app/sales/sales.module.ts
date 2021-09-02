import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";



@NgModule({
  declarations: [
    SalesFormComponent,
    SalesListComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule
  ],
  exports: [
    SalesFormComponent
  ],
  bootstrap: []
})
export class SalesModule { }
