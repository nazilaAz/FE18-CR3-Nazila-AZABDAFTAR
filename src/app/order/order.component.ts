import { Component, OnInit } from '@angular/core';
import { IFood } from '../IFood';
import { MenudetailService } from '../menudetail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CurrancyService } from '../currancy.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cart: Array<IFood> = [];
  id: number = 0;
  price: number = 0;
  sum: number = 0;
  total: number = 0;


  constructor(private orderService: MenudetailService,
    private currancy: CurrancyService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.cart = this.orderService.showCart();

    for (let i = 0; i < this.cart.length; i++) {

      this.price += +this.cart[i].price;
      this.total = +this.price + 3.10;
      this.sum = +this.total.toFixed(2);
      console.log(this.sum);


    }



    this.route.params.subscribe((params: Params) => {
      this.id = this.cart.length;
    });
  }


}
