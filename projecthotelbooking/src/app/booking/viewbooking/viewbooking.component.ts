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
booking:any[]=[];
user:any;
room:any;
constructor(
  private bookingService:BookingService,
  private userservice:UserService,
  private roomservice:RoomService
){}
  ngOnInit(): void {
this.bookingService.getAllbooking()
 .subscribe(data=>{
  this.booking=data;

 })

 this.room=this.roomservice.getAllForRoomView()
 .subscribe(data=>{
  this.room=data;
 })

 this.user=this.userservice.getAllUserForView()
 .subscribe(data=>{
  this.user=data;
 });
  }

}
