import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    TableComponent,
    AddressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    AddressComponent
  ]
})
export class UiComponentsModule { }
