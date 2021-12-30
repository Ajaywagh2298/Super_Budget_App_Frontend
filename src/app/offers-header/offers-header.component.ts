import { Component, OnInit } from '@angular/core';
import {OffersService} from "../services/offers.service";

@Component({
  selector: 'app-offers-header',
  templateUrl: './offers-header.component.html',
  styleUrls: ['./offers-header.component.css']
})
export class OffersHeaderComponent implements OnInit {

  public totalItem: number=0;
  public searchTerm: string="";
  constructor(private OffersService: OffersService) { }

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
}
