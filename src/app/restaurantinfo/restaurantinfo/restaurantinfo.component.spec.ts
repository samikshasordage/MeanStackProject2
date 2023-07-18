import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantinfoComponent } from './restaurantinfo.component';

describe('RestaurantinfoComponent', () => {
  let component: RestaurantinfoComponent;
  let fixture: ComponentFixture<RestaurantinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantinfoComponent]
    });
    fixture = TestBed.createComponent(RestaurantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
