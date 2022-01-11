import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/AuthService";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private service: AuthService) {
  }
  customerFrom = new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'username':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'mobile':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
    'dob':new FormControl('',Validators.required),
  })

  customerSubmit() {
    if(this.customerFrom.valid) {
      console.log(this.customerFrom.value);
      this.service.createData(this.customerFrom.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.customerFrom.reset();
      });
    }
    else{
      console.log('Data Not Feels')
    }
  }

  ngOnInit(): void {
  }

}
