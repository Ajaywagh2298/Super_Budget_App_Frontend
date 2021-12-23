import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
import {HomeLrDividerComponent} from "../home-lr-divider/home-lr-divider.component";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.scss']
})
export class HeaderCustomerComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private dialogRef: MatDialog) {
  }
  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  openDialog() {
    this.dialogRef.open(UserDetailsComponent);
  }
}
