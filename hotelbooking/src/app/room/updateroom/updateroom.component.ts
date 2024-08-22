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
    private romService: RoomService,
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

}
