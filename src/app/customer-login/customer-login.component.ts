import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  invalidLogin: any;
  errorMessage: 'Invalid Credentials' | undefined;
  username: any;
  password: any;
  successMessage: any;
  result: any;
  loginSuccess: boolean | undefined;

  handleLogin() {
  /* this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin=false;
      this.loginSuccess=true;
      this.successMessage='Login Successfull..!!';
    }, ()=>{
      this.invalidLogin=true;
      this.loginSuccess=false;
    });*/
  }
  constructor() { }

  ngOnInit(): void {
  }

}
