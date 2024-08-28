import { Component } from '@angular/core';
import { LocationModel } from '../../model/location.model';
import { HotelModel } from '../../model/hotel.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomModel } from '../../model/room.model';
import { BookingModel } from '../../model/booking.model';
import { HotelService } from '../../service/hotel.service';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrl: './createbooking.component.css'
})
export class CreatebookingComponent {

  locations: LocationModel[] = [];
  hotels: HotelModel[] = [];
  rooms: RoomModel[] = [];
  BookingForm!: FormGroup;
  booking: BookingModel = new BookingModel();

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private locationService: LocationService,
    private hotelService: HotelService,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLocation();
    this.loadHotel();
    this.loadRoom();

    this.BookingForm = this.formBuilder.group({
      username: [''],
      checkindate: [''],
      checkoutdate: [''],
      totalprice: [''],
      room: this.formBuilder.group({
        id:[''],
        roomType: [''],
      }),
      hotel: this.formBuilder.group({
        id:[''],
        hotelname: [''],
      }),
      location: this.formBuilder.group({
        id:[''],
        locationname: [''],
      }),
    });

    this.BookingForm.get('room')?.get('roomType')?.valueChanges.subscribe(roomType => {
      const selectedRoom = this.rooms.find(room => room.roomType === roomType);
      if (selectedRoom) {
        this.BookingForm.patchValue({ room: selectedRoom });
      }
    });

    this.BookingForm.get('hotel')?.get('hotelname')?.valueChanges.subscribe(hotelname => {
      const selectedHotel = this.hotels.find(hotel => hotel.hotelname === hotelname);
      if (selectedHotel) {
        this.BookingForm.patchValue({ hotel: selectedHotel });
      }
    });

    this.BookingForm.get('location')?.get('locationname')?.valueChanges.subscribe(locationname => {
      const selectedLocation = this.locations.find(loc => loc.locationname === locationname);
      if (selectedLocation) {
        this.BookingForm.patchValue({ location: selectedLocation });
      }
    });
  }

  loadLocation() {
    this.locationService.getAllLocationforHotel().subscribe({
      next: res => {
        this.locations = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  loadHotel() {
    this.hotelService.getAllHotelforRoom().subscribe({
      next: res => {
        this.hotels = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  loadRoom() {
    this.roomService.getAllBkingforRoom().subscribe({
      next: res => {
        this.rooms = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  createBooking() {
    this.booking = this.BookingForm.value;

    this.bookingService.createBooking(this.booking).subscribe({
      next: res => {
        this.BookingForm.reset();
        this.router.navigate(['booking']);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
