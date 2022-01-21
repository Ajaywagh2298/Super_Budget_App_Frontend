import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {OffersService} from "../services/offers.service";
import {FormControl, FormGroup, Validators } from '@angular/forms';
import{MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {OffersHeaderComponent} from "../offers-header/offers-header.component";
import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-offers-product',
  templateUrl: './offers-product.component.html',
  styleUrls: ['./offers-product.component.css']
})

export class OffersProductComponent implements OnInit {

  public productList :any;
  public filterCategory : any;
  searchKey:string="";
  public Message : string ="";


  constructor(public dialog: MatDialog, private api: ApiService, private OffersService: OffersService, public OffersHeaderComponent: OffersHeaderComponent) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res=>{
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
          }
          Object.assign(a,{quantity:1,total:a.price});
        });
        console.log(this.productList)
      });

    this.OffersService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

    fun()
    {
        console.log(this.Message);
    }

  addtocart(item: any){
      console.log("in Add to cart offer-product compo");
    this.OffersService.addToCart(item);
      let tPrice=0;
      let bPrice=0;
      tPrice=this.OffersService.getTotalPrice();
      //bPrice=this.OffersHeaderComponent.set.Bvalues;
      if(tPrice>1000) {
          console.log("Aukat me reh");
          this.dialog.open(DialogElementsExampleDialog);
      }
  }

  filter(category:string){
    this.filterCategory = this.productList
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
  }

}
@Component({
    selector: 'alert',
    templateUrl: 'alert.html',
})
export class DialogElementsExampleDialog {}
