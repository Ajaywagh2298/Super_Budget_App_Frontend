import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthService} from "./services/AuthService";

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {CustomerComponent} from './customer/customer.component';
import {CustomerLoginComponent} from './customer-login/customer-login.component';
import {HeaderCustomerComponent} from './customer-header/header-customer.component';
import {SidenavCustomerComponent} from './customer-sidenav/sidenav-customer.component';
import {HomeCustomerComponent} from './home-customer/home-customer.component';
import {DashboardCustomerComponent} from './customer-dashboard/dashboard-customer.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {HomeHeaderComponent} from './home-header/home-header.component';
import {HomeLoginViewComponent} from './home-login-view/home-login-view.component';
import {MatDividerModule} from "@angular/material/divider";
import {HomeAboutComponent} from './home-about/home-about.component';
import {HomeAimComponent} from './home-aim/home-aim.component';
import {HomeFooterComponent} from './home-footer/home-footer.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HomeLrDividerComponent} from './home-lr-divider/home-lr-divider.component';
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule} from "@angular/forms";
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { MyListComponent } from './my-list/my-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerLoginComponent,
    HeaderCustomerComponent,
    SidenavCustomerComponent,
    HomeCustomerComponent,
    DashboardCustomerComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeLoginViewComponent,
    HomeAboutComponent,
    HomeAimComponent,
    HomeFooterComponent,
    HomeLrDividerComponent,
    CustomerRegistrationComponent,
    MyListComponent,

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
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
