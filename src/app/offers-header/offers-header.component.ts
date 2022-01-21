import { Component, OnInit } from '@angular/core';
import {OffersService} from "../services/offers.service";
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import {OffersProductComponent} from "../offers-product/offers-product.component";
import {Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offers-header',
  templateUrl: './offers-header.component.html',
  styleUrls: ['./offers-header.component.css']
})


export class OffersHeaderComponent implements OnInit {

  public totalItem: number=0;
  public searchTerm: string="";
  set=new SetBudgetComponent();
  //final:number=0;
  @Output() public Myevent= new EventEmitter();
  public fun()
  {
    this.Myevent.emit("gouri's baby");
  }

  constructor(public dialog: MatDialog,public OffersService: OffersService) { }

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

  openDialog() {
    const dialogRef = this.dialog.open(SetBudgetComponent);
  }

}

@Component({
  selector: 'set-budget',
  templateUrl: 'set-budget.html',
})
 export class SetBudgetComponent extends OffersService implements OnInit{
  setBudget=new FormGroup({'amount':new FormControl(),})
  Bvalues:number=0;

  ngOnInit(): void {

  }

  @Output() public Myevent= new EventEmitter();
  public fun()
  {
    this.Myevent.emit("gouri's baby");
  }

  onEnter(){
    let amount;
    if(this.setBudget.valid) {
      this.Bvalues=this.setBudget.value;
      this.fun();
      //this.Bvalues=parseInt(this.setBudget.value);
      console.log("Bvalue");
      console.log(this.Bvalues);
      //OffersService.etBudget(this.Bvalues);
      return this.Bvalues;

    }
    else{
      console.log('Data Not Feels')

      return 0;
    }
  }
}


