import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { HotelService } from '../../service/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewroom',
  templateUrl: './viewroom.component.html',
  styleUrl: './viewroom.component.css'
})
export class ViewroomComponent implements OnInit {

  rooms: any;
  hotels: any;

  constructor(
    private roomService: RoomService,
    private hotelService: HotelService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.rooms = this.roomService.viewAllRoom();
    this.hotels = this.hotelService.getAllStudentforRoom();
  }

  deleteRoom(id: string) {
    this.roomService.deleteRoom(id)
      .subscribe({
        next: res => {
          this.rooms = this.roomService.viewAllRoom();
          this.router.navigate(['/roomview']);
        },
      
        error: error => {
          console.log(error);
        }
      });
}

}