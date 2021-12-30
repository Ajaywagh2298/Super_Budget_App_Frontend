import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {OffersService} from "../services/offers.service";

@Component({
  selector: 'app-offers-product',
  templateUrl: './offers-product.component.html',
  styleUrls: ['./offers-product.component.css']
})
export class OffersProductComponent implements OnInit {

  public productList :any;
  public filterCategory : any;
  searchKey:string="";
  constructor(private api: ApiService, private OffersService: OffersService) { }

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
  addtocart(item: any){
    this.OffersService.addToCart(item);
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
