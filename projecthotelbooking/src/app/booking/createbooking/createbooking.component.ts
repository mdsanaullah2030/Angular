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
    this.bookingForm.get('user')?.get('userid')?.valueChanges
      .subscribe(userid => {
        const selectedUser = this.user.find(user => user.userid === userid);
        if (selectedUser) {
          this.bookingForm.patchValue({ user: selectedUser });

        }
      });
    this.bookingForm.get('location')?.get('CoxsBazar')?.valueChanges
      .subscribe(CoxsBazar => {
        const selectLocation = this.location.find(loc => loc.CoxsBazar === CoxsBazar);
        if (selectLocation) {
          this.bookingForm.patchValue({ location: selectLocation });

        }
      });
    this.bookingForm.get('room')?.get('roomtype')?.valueChanges
      .subscribe(roomtype => {
        const selectRoom = this.room.find(loc => loc.roomtype === roomtype);
        if (selectRoom) {
          this.bookingForm.patchValue({ location: selectRoom });

        }
      });

    this.bookingForm.get('room')?.get('roomid')?.valueChanges
      .subscribe(roomid => {
        const selectRoom = this.room.find(loc => loc.roomid === roomid);
        if (selectRoom) {
          this.bookingForm.patchValue({ room: selectRoom });

        }
      });
    this.bookingForm.get('room')?.get('price')?.valueChanges
      .subscribe(price => {
        const selectRoom = this.room.find(loc => loc.price === price);
        if (selectRoom) {
          this.bookingForm.patchValue({ room: selectRoom });

        }
      })

  }


  loaduser() {
    this.userService.getAllUserForView()
      .subscribe({
        next: res => {
          this.user = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }

  createBooking() {
    this.bookings.user = this.bookingForm.value.user;
    this.bookings.location = this.bookingForm.value.location;
    this.bookings.room = this.bookingForm.value.room;

    this.bookings.room = this.bookingForm.value.room;
    this.bookings.checkindate = this.bookingForm.value.checkindate;
    this.bookings.checkoutdate = this.bookingForm.value.checkoutdate;
    this.bookings.room = this.bookingForm.value.room;

    this.bookingService.createbooking(this.bookings)
      .subscribe({
        next: res => {
          this.loaduser(); // Load users after successful booking
          this.bookingForm.reset(); // Reset the form
          this.router.navigate(['bookingview']);
        },
        error: error => {
          console.log(error);
        }
      });
  }


}