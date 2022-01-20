import { Component, OnInit } from '@angular/core';
import {OffersService} from "../services/offers.service";
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offers-header',
  templateUrl: './offers-header.component.html',
  styleUrls: ['./offers-header.component.css']
})
export class OffersHeaderComponent implements OnInit {

  public totalItem: number=0;
  public searchTerm: string="";
  set=new SetBudgetComponent();

  constructor(public dialog: MatDialog,private OffersService: OffersService) { }

  ngOnInit(): void {
    this.OffersService.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    })
  }
  search(event: any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.OffersService.search.next(this.searchTerm);
  }

  // public value = '';
  // onEnter() {
  //   console.log("OnEnter error!!");
  //   return this.value;
  // }

  openDialog() {
    const dialogRef = this.dialog.open(SetBudgetComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'set-budget',
  templateUrl: 'set-budget.html',
})

 export class SetBudgetComponent {
  setBudget=new FormGroup({'amount':new FormControl('',Validators.required),})
  values:string='';
  displayValue:string='';

  onEnter(){
    let amount;
    if(this.setBudget.valid) {
      console.log(this.setBudget.value);
      this.displayValue=this.setBudget.value;
      //this.displayValue;
    }
    else{
      console.log('Data Not Feels')
    }
}
}
