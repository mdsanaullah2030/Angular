import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room.model';
import { HotelModel } from '../../model/hotel.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { HotelService } from '../../service/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrl: './createroom.component.css'
})
export class CreateroomComponent implements OnInit{
rooms:RoomModel[]=[];
hotels:HotelModel[]=[];
roomForm!:FormGroup;
room:RoomModel=new RoomModel();


constructor(
  private roomService: RoomService,
  private hotelService: HotelService,
  private formBuilder: FormBuilder,
  private router: Router
){

}
  ngOnInit(): void {
    this.loadHotel();
    this.roomForm=this.formBuilder.group({
      roomType:[''],
      adults:[''],
      children:[''],
      price:[''],

      hotel:this.formBuilder.group({
        id:[''],
        hotelname:[''],

      })

    })

    this.roomForm.get('hotel')?.get('hotelname')?.valueChanges
    .subscribe(hotelname => {
      const selectedHotel = this.hotels.find(loc => loc.hotelname === hotelname);
      if (selectedHotel) {
        this.roomForm.patchValue({hotel:selectedHotel});
      }
    });
  }

  loadHotel() {
    this.hotelService.getAllStudentforRoom().subscribe({
      next: res => {
        this.hotels = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  createRoom() {
    this.room.roomType = this.roomForm.value.roomType;
    this.room.adults = this.roomForm.value.adults;
    this.room.children = this.roomForm.value.children;
    this.room.price = this.roomForm.value.price;
    this.room.hotel = this.roomForm.value.hotel;

    this.roomService.createRoom(this.room).subscribe({
      next: res => {
        this.roomForm.reset();
        this.router.navigate(['roomview']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
  }





