import { Component, OnInit } from '@angular/core';
import{OffersService} from "../services/offers.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  public products: any=[];
  public grandTotal !: number;
  constructor(private OffersService: OffersService) { }

  ngOnInit(): void {
    this.OffersService.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.OffersService.getTotalPrice();
      return this.grandTotal;
    })
  }
  removeItem(item:any){
    this.OffersService.removeCartItem(item);
  }
  emptycart(){
    this.OffersService.removeAll();
  }
}
