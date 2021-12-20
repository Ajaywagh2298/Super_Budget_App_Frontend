import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {DashboardCustomerComponent} from "./customer-dashboard/dashboard-customer.component";
import {CustomerComponent} from "./customer/customer.component";
import {SidenavCustomerComponent} from "./customer-sidenav/sidenav-customer.component";
import {MyListComponent} from "./my-list/my-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {path: 'home-customer', component: HomeCustomerComponent},
  {path: 'customer-dashboard', component: DashboardCustomerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-login', component: CustomerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'dashboard', component: DashboardCustomerComponent},
  {path: 'customer-sidenav', component: SidenavCustomerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'mylist', component: MyListComponent},
  {path: 'user-details', component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
