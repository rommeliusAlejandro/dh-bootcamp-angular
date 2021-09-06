import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SalesFormComponent,
    SalesListComponent,
    InternalComponent,
    ExternalComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    RouterModule
  ],
  exports: [
    SalesFormComponent
  ],
  bootstrap: []
})
export class SalesModule { }
