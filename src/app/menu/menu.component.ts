import { Component } from '@angular/core';
import { IFood } from '../IFood';
import { foods } from '../foods';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  food: Array<IFood> = foods;
}
