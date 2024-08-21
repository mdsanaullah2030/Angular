import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { HotelService } from '../../service/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrl: './viewhotel.component.css'
})
export class ViewhotelComponent implements OnInit{
hotels:any;
locations: any;

constructor(
  private locationService:LocationService,
  private hotelService:HotelService,
  private router: Router,
){

}

  ngOnInit(): void {
    this.hotels=this.hotelService.viewAllHotel();
    this.locations=this.locationService.getAllLocationforHotel();
    
  }

}
