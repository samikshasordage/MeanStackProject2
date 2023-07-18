import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { RestaurantData } from '../../restaurant-dash/restaurant-dash/restaurant.model';

@Component({
  selector: 'app-restaurantinfo',
  templateUrl: './restaurantinfo.component.html',
  styleUrls: ['./restaurantinfo.component.css']
})
export class RestaurantinfoComponent implements OnInit {
  restaurantId!: number;
  selectedRestaurantData: any = {};

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = params['id'];
      this.getRestaurantInfo();
    });
  }

  getRestaurantInfo() {
    this.api.getRestaurantById(this.restaurantId).subscribe(res => {
      this.selectedRestaurantData = res;
    }, err => {
      console.log(err);
    });
  }
  
}
