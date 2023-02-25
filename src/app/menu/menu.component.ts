import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IFood } from '../IFood';
import { foods } from '../foods';
import { MenudetailService } from '../menudetail.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {
  // isValid: boolean = false;
  food: Array<IFood> = foods;

    constructor(
    private orderService: MenudetailService) { }

    orderTocart(FoodObject:IFood){
      alert("added");
      this.orderService.addTocart(FoodObject);
    }
}


