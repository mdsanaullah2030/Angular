import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { RoomModel } from '../../model/room.model';
import { LocationModel } from '../../model/location .model';
import { BookingModel } from '../../model/booking.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { RoomService } from '../../service/room.service';
import { LocationService } from '../../service/location.service';
import { BookingService } from '../../service/booking.service';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrl: './createbooking.component.css'
})
export class CreatebookingComponent implements OnInit {
  user: UserModel[] = [];
  room: RoomModel[] = [];
  location: LocationModel[] = [];
  booking: BookingModel[] = []
  bookingForm!: FormGroup;
  bookings: BookingModel = new BookingModel();

  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private locatoinService: LocationService,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }




  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({

      checkindate: [''],
      checkoutdated: [''],

      user: this.formBuilder.group({
        userid: [undefined],
        name: [undefined],
        email: [undefined],
        nid: [undefined],
        phonenumber: [undefined],



      }),

      location: this.formBuilder.group({
        id: [undefined],
        CoxsBazar: [undefined],
        Dhaka: [undefined],
        Sylhet: [undefined],
        Chittagong: [undefined],
        Sreemangal: [undefined],
        Kuakata: [undefined],



      }),
      room: this.formBuilder.group({
        id: [undefined],
        roomid: [undefined],
        roomnumber: [undefined],
        roomtype: [undefined],
        price: [undefined],
        status: [undefined],
        description: [undefined],


      })






    });
    this.bookingForm.get('user')?.get('name')?.valueChanges
  }

}

