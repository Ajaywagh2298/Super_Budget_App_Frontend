import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {


  constructor(private authService: AuthService) {
  }



  ngOnInit(): void {
  }

}
