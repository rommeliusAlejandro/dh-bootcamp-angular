import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NewsComponent} from "./news/news.component";
import { SystemNewsComponent } from './system-news/system-news.component';
import { UserNewsComponent } from './user-news/user-news.component';
import { OrganizationNewsComponent } from './organization-news/organization-news.component';
import { AdBarComponent } from './ad-bar/ad-bar.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    SystemNewsComponent,
    UserNewsComponent,
    OrganizationNewsComponent,
    AdBarComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class HomeModule { }
