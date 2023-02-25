import { Component, OnInit } from '@angular/core';
import { IFood } from '../IFood';
import { MenudetailService } from '../menudetail.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  cart: Array<IFood> = [];

  constructor(private orderService: MenudetailService) { }
  ngOnInit(): void {
    this.cart= this.orderService.showCart();
  }
  

}
