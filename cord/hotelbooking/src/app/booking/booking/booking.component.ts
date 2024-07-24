import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'node:console';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
bookings:any;

constructor(
  private bokingService:BookingService,
  private router:Router,
  private httpClint:HttpClient
){}
  ngOnInit(): void {
   
    this.bookings=this.bokingService.getAllBooking();

  }
  deletebooking(id:string){
    this.bokingService.deletebooking(id).subscribe({
      next:res=>{
        this.bookings=this.bokingService.getAllBooking();
        this.router.navigate(['booking']);
      },
      error:error=>{
        console.log(error);

      }

    });

  }
  updatebooking(id:string){
    this.router.navigate(['updatebooking',id]);
  }


}
