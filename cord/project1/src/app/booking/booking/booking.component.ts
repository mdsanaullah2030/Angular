import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
bookings:any;
constructor(
  private bookingService:BookingService,
  private router:Router,
  private httpClient:HttpClient
){
  
}



  ngOnInit(): void {
    this.bookings=this.bookingService.getAllBooking();
  }

}
