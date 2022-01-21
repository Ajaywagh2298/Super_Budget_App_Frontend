import { Component, OnInit , Input} from '@angular/core';
import { Article } from '../scan-main/article';

@Component({
  selector: 'app-scan-cart',
  templateUrl: './scan-cart.component.html',
  styleUrls: ['./scan-cart.component.css']
})
export class ScanCartComponent implements OnInit {

  constructor() { }
  @Input()
  article: Article | undefined;

  @Input()
  count: number | undefined;
  ngOnInit(): void {
  }

}
