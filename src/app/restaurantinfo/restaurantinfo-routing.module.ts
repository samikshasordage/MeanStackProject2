import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantinfoComponent } from './restaurantinfo/restaurantinfo.component';
const routes: Routes =[
  {
    path: '',
    component: RestaurantinfoComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantinfoRoutingModule { }
