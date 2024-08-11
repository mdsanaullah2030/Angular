import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrl: './viewhotel.component.css'
})
export class ViewhotelComponent implements OnInit{

  hotels:any;
  constructor(
private hotelService:HotelService,
private router:Router,
private httpClint:HttpClient
  ){}
  ngOnInit(): void {
    this.hotels=this.hotelService.getAllhotel();
  }

}
