import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/AuthService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router,
  ) {
  }

customerLoginForm = new FormGroup({
   'username': new FormControl('', Validators.required),
   'password': new FormControl('', Validators.required),
 });

  processing: Boolean = false;
  error: Boolean = false;
  //checkField  = CheckRequiredField;


  /* --------------------------------------------------------------------------------------------------------
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
    }
    ---------------------------------------------------------------------------------------------------*/


  ngOnInit(): void {

  }


 /* private login() {
    this.processing = true;
    this.service.loginData(this.customerLoginForm.value).then(
      (data: any) => {
        if (data) {
          this.handleLoginSuccess();
        } else {
          this.handleLoginError();
        }
      },
      (err: any) => {
        console.log(' ---- ERROR ---- ');
        console.log(err);
        this.handleLoginError();
      });
  } */

  private handleLoginSuccess() {

    this.processing = true;
    this.error = false;
    this.router.navigate(['/dashboard']);
    console.log("Handle login success")
  }

  private handleLoginError() {
    console.log("Handle login error")
    this.processing = false;
    this.error = true;
  }

 // private initForm() {
  //    username: new FormControl('', [Validators.required]),
   //   password: new FormControl('', Validators.required),
   // });
  //}


  customerLogin() {
    if (this.customerLoginForm.valid) {
      console.log(this.customerLoginForm.value);
      this.service.loginData(this.customerLoginForm.value).subscribe(res => {

        const data = this.service.loginData(this.customerLoginForm.value);

            if (data!=null) {
             this.handleLoginSuccess();
             //this.router.navigate(['/dashboard']);
             // var url= "http://localhost:4200/dashboard";
            // window.location.href = url;
            } else {
              this.handleLoginError();
            }
      });

    }
  }
}
