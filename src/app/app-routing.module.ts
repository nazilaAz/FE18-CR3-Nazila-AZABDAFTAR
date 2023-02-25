import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeheroComponent } from './homehero/homehero.component';
import { MenuComponent } from './menu/menu.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:"", component: HomeheroComponent},
  {path:"about", component:AboutusComponent},
  {path:"menu", component:MenuComponent},
  {path:"menu/:id",component:MenudetailsComponent},
  {path:"cart", component:OrderComponent},
  // {path:"cart/:id",component:OrderComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
