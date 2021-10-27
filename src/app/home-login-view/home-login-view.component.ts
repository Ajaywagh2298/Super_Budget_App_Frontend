import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HomeLrDividerComponent} from "../home-lr-divider/home-lr-divider.component";

@Component({
  selector: 'app-home-login-view',
  templateUrl: './home-login-view.component.html',
  styleUrls: ['./home-login-view.component.css']
})
export class HomeLoginViewComponent implements OnInit {

  constructor(private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogRef.open(HomeLrDividerComponent)
  }
}
