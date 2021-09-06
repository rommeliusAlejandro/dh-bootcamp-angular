import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
