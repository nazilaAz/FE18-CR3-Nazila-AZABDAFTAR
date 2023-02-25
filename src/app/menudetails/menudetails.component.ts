import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IFood } from '../IFood';
import { foods } from '../foods';
import { MenudetailService } from '../menudetail.service';


@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.scss']
})
export class MenudetailsComponent implements OnInit {
  menuDetail: IFood = {} as IFood;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private menuService:MenudetailService){
    
  }
  addToCart() {
    this.menuService.addTocart(this.menuDetail);
    // this.id++;
    
      }
      ngOnInit() {

        this.route.params.subscribe((params: Params) => {
          // console.log(params);
          this.id = +params['id'];
          this.menuDetail = foods[this.id];
          // console.log(this.menuDetail);
          //  
        });
      }

}
