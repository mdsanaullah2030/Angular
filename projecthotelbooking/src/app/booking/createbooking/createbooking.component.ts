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
        this.bookingForm.get('user')?.patchValue(selectedUser);
      }
    });
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
    this.bookings.user = this.bookingForm.get('user')?.value; // Corrected this line
    this.bookings.room = this.bookingForm.get('room')?.value; // Get the room data
    this.bookings.location = this.bookingForm.get('location')?.value; // Get the location data
    this.bookings.checkindate = this.bookingForm.get('checkindate')?.value;
    this.bookings.checkoutdate = this.bookingForm.get('checkoutdate')?.value;
    // this.bookings.price = this.bookingForm.get('room')?.get('price')?.value;
  
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
