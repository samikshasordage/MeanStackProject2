import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
const routes: Routes = [
  {
   path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
 {
   path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) 
 }, 
 {
   path:'restaurent' ,loadChildren: () => import('./restaurant-dash/restaurant-dash.module').then(m => m.RestaurantDashModule) 
 },
 {
  path: 'restaurantinfo/:id', // Add ':id' to include the ID parameter
  loadChildren: () => import('./restaurantinfo/restaurantinfo.module').then(m => m.RestaurantinfoModule)
},
 
 {
  path: '', redirectTo: 'login',pathMatch: 'full'  // login.component.html
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }