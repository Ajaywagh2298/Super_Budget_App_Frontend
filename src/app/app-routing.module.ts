import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {DashboardCustomerComponent} from "./customer-dashboard/dashboard-customer.component";
import {CustomerComponent} from "./customer/customer.component";
import {SidenavCustomerComponent} from "./customer-sidenav/sidenav-customer.component";
import {MyListComponent} from "./my-list/my-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {CustomerRegistrationComponent} from "./customer-registration/customer-registration.component";
import {CustomerFeedbackComponent} from "./customer-feedback/customer-feedback.component";
import {OffersComponent} from "./offers/offers.component";
import {OffersHeaderComponent} from "./offers-header/offers-header.component";
import {OffersProductComponent} from "./offers-product/offers-product.component";
import {OffersMainComponent} from "./offers-main/offers-main.component";
import {CustomerPurchaseComponent} from "./customer-purchase/customer-purchase.component";
import {CustomerNearbymallsComponent} from "./customer-nearbymalls/customer-nearbymalls.component";

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
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'signup', component: CustomerRegistrationComponent },
  {path: 'feedback', component:CustomerFeedbackComponent},
  {path: 'offers', component:OffersComponent},
  {path: 'offers-header', component: OffersHeaderComponent},
  {path: 'offers-product', component: OffersProductComponent},
  {path: 'offers-main', component:OffersMainComponent},
  {path: 'purchase', component:CustomerPurchaseComponent},
  {path: 'nearbymalls', component:CustomerNearbymallsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
