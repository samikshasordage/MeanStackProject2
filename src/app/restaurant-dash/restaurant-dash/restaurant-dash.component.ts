import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import {RestaurantData } from './restaurant.model';
@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit{

  formValue!:FormGroup
  restaurentModelObj : RestaurantData = new RestaurantData;
  allRestaurentData: any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.getAllData();
  }

  clickAddResto()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = true;
  }
 
  addRestaurent()
  {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurent Added Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err=>{
      console.log(err);
      alert("Restaurent Added Failed!");
    })
  }

  getAllData()
  {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData= res;
    }, err=>{
      console.log(err);
    })
  }

  deleteResto(data: any)
  {
    this.api.deleteRestaurant(data).subscribe((res: any) => {
      console.log(res);
      alert("Restaurent Deleted Successfully");
      this.getAllData();
    })
  }

  onEditResto(data: any)
  {
    this.showAdd = false;
    this.showBtn = true;
    
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

 
  }
  updateResto(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.updateRestaurant(this.restaurentModelObj.id,this.restaurentModelObj).subscribe((res: any) => {
      alert("Restaurent Updated Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    })
    
  }

  
}
