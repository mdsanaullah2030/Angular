import { Component, OnInit } from '@angular/core';
import { bookingmodel } from '../model/booking.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrl: './createbooking.component.css'
})
export class CreatebookingComponent implements OnInit{
booking:bookingmodel=new bookingmodel();
formValue!:FormGroup;
bookingData:any;
constructor(
  private bookingService:BookingService,
  private  router:Router,
  private httpClint:HttpClient,
  private formBuilder:FormBuilder,


){}

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      
      name:[''],
      email:[''],
      checkInDate:[''],
      checkOutDate:[''],
      roomType:[''],
      paymentStatus:['']


    });
   
  }
  createbooking(){

    this.booking.name=this.formValue.value.name;
    this.booking.email=this.formValue.value.email;
    this.booking.checkInDate=this.formValue.value.checkInDate;
    this.booking.checkOutDate=this.formValue.value.checkOutDate;
    this.booking.roomType=this.formValue.value.roomType;
    this.booking.paymentStatus=this.formValue.value.paymentStatus;

this.bookingService.createbooking(this.booking)
.subscribe({
  next:res=>{
    console.log(res);
    this.formValue.reset();
    this.router.navigate(['/booking']);
  },
  error:error=>{
    console.log(error);
  }
});

  }

}
