import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './dashboard-customer.component.html',
  styleUrls: ['./dashboard-customer.component.scss']
})
export class DashboardCustomerComponent implements OnInit {
  value: any= 5000;

  constructor() {
  }

  ngOnInit(): void {
  }

}
