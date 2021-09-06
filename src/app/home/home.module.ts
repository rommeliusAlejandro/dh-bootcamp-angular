import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NewsComponent} from "./news/news.component";
import { SystemNewsComponent } from './system-news/system-news.component';
import { UserNewsComponent } from './user-news/user-news.component';
import { OrganizationNewsComponent } from './organization-news/organization-news.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    SystemNewsComponent,
    UserNewsComponent,
    OrganizationNewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
