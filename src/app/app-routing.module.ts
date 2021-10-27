import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {DashboardCustomerComponent} from "./dashboard-customer/dashboard-customer.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  {path: 'home-customer', component: HomeCustomerComponent},
  {path: 'dashboard-customer', component: DashboardCustomerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-login', component: CustomerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
