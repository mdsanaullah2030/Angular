import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room.model';
import { HotelModel } from '../../model/hotel.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.component.html',
  styleUrl: './updateroom.component.css'
})
export class UpdateroomComponent implements OnInit{
  room: RoomModel = new RoomModel();
  hotels: HotelModel[] = [];
  roomId: string = "";
  roomForm!: FormGroup;

  constructor(
    private roomService: RoomService,
    private hotelService: HotelService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.roomId=this.route.snapshot.params['id'];
    this.roomForm = this.formBuilder.group({
      roomType: [''],
      adults: [''],
      children: [''],
      price: [''],
      hotel: this.formBuilder.group({
        id: [undefined],
        hotelname: [undefined]
      })
    });
    this.loadHotel();
    this.loadRoomDetails();
  }

  loadHotel(): void {
    this.hotelService.getAllHotelforRoom().subscribe({
      next: (res: HotelModel[]) => {
        this.hotels = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  loadRoomDetails(): void {
    this.roomService.getByRoomId(this.roomId).subscribe({
      next: (room: RoomModel) => {
        this.room = this.room;
        this.roomForm.patchValue({
          roomType: room.roomType,
          adults: room.adults,
          children: room.children,
          price: room.price,
          hotel: room.hotel
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateRoom(): void {
    const updatedRoom: RoomModel = {
      ...this.room,
      ...this.roomForm.value
    };

    this.roomService.updateRoom(updatedRoom).subscribe({
      next: () => {
        this.roomForm.reset();
        this.router.navigate(['/roomview']);
      },
      error: (err) => {
        console.error('Error updating hotel:', err);
      }
    });
  }

}
