import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  sideBarOpen= true;
  constructor() {
  }

  ngOnInit(): void {
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
