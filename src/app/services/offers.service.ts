import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  public cartItemList: any=[];
  public productList= new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public budget:number=0;
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }



  compBudget(num:number):number{
    let tPrice=0;
    tPrice=this.getTotalPrice();
    if(tPrice>num){
      console.log("out of Budget");
    }
    return 1;
  }

  getTotalPrice(): number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a: any, index: any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAll(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
