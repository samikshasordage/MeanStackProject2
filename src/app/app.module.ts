import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash/restaurant-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantinfoComponent } from './restaurantinfo/restaurantinfo/restaurantinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashComponent,
    LoginComponent,
    SignupComponent,
    RestaurantinfoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

