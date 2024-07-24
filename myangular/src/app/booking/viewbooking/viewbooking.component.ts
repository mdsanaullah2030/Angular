import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student/student.service';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';


@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrl: './viewbooking.component.css'
})
export class ViewbookingComponent implements OnInit{
bookings:any;
students:any;

constructor(
private bookingService:BookingService,
private studentService:StudentService,
private router:Router,
){}

  ngOnInit(): void {
  
this.bookings=this.bookingService.viewAllBooking();
    this.students=this.studentService.getAllStudentforBooking();
  }
     

}
