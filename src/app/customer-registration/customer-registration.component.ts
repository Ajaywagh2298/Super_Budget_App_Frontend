import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  invalidLogin: any;
  errorMessage: 'Invalid Credentials' | undefined;
  username: any;
  password: any;
  successMessage: any;
  result: any;
  loginSuccess: boolean | undefined;

  constructor(private authService: AuthService) {
  }

  handleRegister() {
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successfull..!!';
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

  ngOnInit(): void {
  }

}
