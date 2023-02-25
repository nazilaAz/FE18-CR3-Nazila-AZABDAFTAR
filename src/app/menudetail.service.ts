import { Injectable } from '@angular/core';
import { IFood } from './IFood';

@Injectable({
  providedIn: 'root'
})
export class MenudetailService {
  cart: Array<IFood> = [];

  constructor() { }

  addTocart(orderTocart: IFood) {
    this.cart.push(orderTocart);
  }
  showCart(){
    return this.cart;
  }
  emptyCart(){
    this.cart=[];
    return this.cart;
  }
}
