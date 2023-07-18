import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurantData } from '../restaurant-dash/restaurant-dash/restaurant.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{

  [x: string]: any;
  addRestaurent(restaurantModelObj: RestaurantData) 
  {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

  //POST request
  postRestaurent(data:any ) 
  {
    return this._http.post<any>("http://localhost:3000/api/restaurent", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //GET request
  getRestaurent() 
  {
    return this._http.get<any>("http://localhost:3000/api/restaurent").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant(id:number) 
  {
    return this._http.delete<any>("http://localhost:3000/api/restaurent/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }

  //update request
  updateRestaurant(id: number, data: any) 
  {
    return this._http.put<any>("http://localhost:3000/api/restaurent/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }

  getRestaurantById(id: number) {
    return this._http.get<any>("http://localhost:3000/api/restaurent/" + id).pipe(map((res: any) => {
      return res;
    }));
  }
}

