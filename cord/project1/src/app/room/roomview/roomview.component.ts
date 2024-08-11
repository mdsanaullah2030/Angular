import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/room.model';
import { BookingService } from '../roombook.service';

@Component({
  selector: 'app-roomview',
  templateUrl: './roomview.component.html',
  styleUrl: './roomview.component.css'
})
export class RoomviewComponent implements OnInit{

  startDate: any;
  endDate: any;
  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];


  constructor(private bookingService:BookingService){


  }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe
    ((data: Booking[]) => {
      this.bookings = data;
      this.filteredBookings = data;
  });

}

filterBookings(): void {
  if (this.startDate && this.endDate) {
    this.filteredBookings = this.bookings.filter(booking => {
      const checkIn = new Date(booking.checkInDate);
      const checkOut = new Date(booking.checkOutDate);
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      return (checkIn >= start && checkIn <= end) || (checkOut >= start && checkOut <= end);
    });
  } else {
    this.filteredBookings = this.bookings;
  }
}
}
