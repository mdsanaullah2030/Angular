import { Component, OnInit } from '@angular/core';
import { FulfilService } from '../fulfil.service';
import { BookingService } from '../../booking/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewfulfil',
  templateUrl: './viewfulfil.component.html',
  styleUrl: './viewfulfil.component.css'
})
export class ViewfulfilComponent implements OnInit{
bookings:any;
fulfils:any;

constructor(
  private fulfilServics:FulfilService,
  private bookingService:BookingService,
  private router:Router
){}

  ngOnInit(): void {
   
    this.bookings=this.bookingService.getAllBookingForFulfil();
    this.fulfils=this.fulfilServics.viewAllfulfil();
  }

}
