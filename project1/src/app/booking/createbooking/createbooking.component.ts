import { Component, OnInit } from '@angular/core';
import { BookingModel } from '../model/booking.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { HttpClient, HttpContext } from '@angular/common/http';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrl: './createbooking.component.css'
})
export class CreatebookingComponent implements OnInit{

booking:BookingModel=new BookingModel();
formValue!:FormGroup;
bookingData:any;

constructor(
  private bookingService:BookingService,
  private router:Router,
  private httpClient:HttpClient,
  private formBuilder:FormBuilder,
){}

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({


      roomNumber:[''],
    guestName: [''],
    checkInDate: [''],
    checkOutDate: [''],
    totalPrice:[''],

    });
   
  }
  createBooking(){

    this.booking.roomNumber=this.formValue.value.roomNumber;
    this.booking.guestName=this.formValue.value.guestName;
    this.booking.checkInDate=this.formValue.value.checkInDate;
    this.booking.checkOutDate=this.formValue.value.checkOutDate;
    this.booking.totalPrice=this.formValue.value.totalPrice;

    this.bookingService.createbooking(this.booking)
    .subscribe({
      next:res=>{
        console.log(res);
        this.formValue.reset();
        this.router.navigate(['/booking']);
      },
      error: error=>
        {
          console.log(error);
        }
    })

  }

}
