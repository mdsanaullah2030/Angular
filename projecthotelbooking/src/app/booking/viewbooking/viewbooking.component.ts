import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking.service';
import { UserService } from '../../service/user.service';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrl: './viewbooking.component.css'
})
export class ViewbookingComponent implements OnInit{
booking:any;
user:any;
room:any;
constructor(
  private bookingService:BookingService,
  private userservice:UserService,
  private roomservice:RoomService
){}
  ngOnInit(): void {
 this.booking=this.bookingService.getAllbooking();

 this.user=this.roomservice.getAllForUserView();
  }

}
