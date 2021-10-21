import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { CustomerComponent } from './customer/customer.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HeaderCustomerComponent } from './header-customer/header-customer.component';
import { SidenavCustomerComponent } from './sidenav-customer/sidenav-customer.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerLoginComponent,
    HeaderCustomerComponent,
    SidenavCustomerComponent,
    HomeCustomerComponent,
    DashboardCustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
