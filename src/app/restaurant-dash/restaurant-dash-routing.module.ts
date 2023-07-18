import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantDashRoutingModule { }
