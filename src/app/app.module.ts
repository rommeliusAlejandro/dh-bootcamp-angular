import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SalesModule} from "./sales/sales.module";
import {UsersModule} from "./users/users.module";
import {HomeModule} from "./home/home.module";
import {CommonsModule} from "@dh-rall/commons";
import {ChatModule} from "@dh-rall/ui-components";
import {MenuModule} from "@dh-rall/ui-elements";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SalesModule,
    UsersModule,
    HomeModule,
    CommonsModule,
    ChatModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
