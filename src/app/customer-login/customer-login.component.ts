import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/AuthService";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private service: AuthService) {
  }
/*
  invalidLogin: any;
  errorMessage: 'Invalid Credentials' | undefined;
  username: any;
  password: any;
  successMessage: any;
  result: any;
  loginSuccess: boolean | undefined;





  handleLogin() {
   // this.authService.login(this.username, this.password).subscribe((result) => {

      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successfull..!!';
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }*/
  processing: Boolean = false;
  error: Boolean = false;
  customerLogin = new FormGroup({
    'username':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  loginSubmit() {
    if(this.customerLogin.valid) {
      console.log(this.customerLogin.value);
      this.service.loginData(this.customerLogin.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.customerLogin.reset();
      });
    }
    else{
      console.log('Data Not Feels')
    }
  }

}
