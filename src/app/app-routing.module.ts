import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {DashboardCustomerComponent} from "./customer-dashboard/dashboard-customer.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  {path: 'home-customer', component: HomeCustomerComponent},
  {path: 'customer-dashboard', component: DashboardCustomerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-login', component: CustomerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'dashboard', component: DashboardCustomerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
