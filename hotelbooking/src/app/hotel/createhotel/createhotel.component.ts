import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../model/location.model';
import { HotelModel } from '../../model/hotel.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelService } from '../../service/hotel.service';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createhotel',
  templateUrl: './createhotel.component.html',
  styleUrl: './createhotel.component.css'
})
export class CreatehotelComponent implements OnInit {

  location: LocationModel[] = [];
  hotelForm!: FormGroup; // Corrected `holetForm` to `hotelForm`
  hotel: HotelModel = new HotelModel();

  constructor(
    private hotelService: HotelService,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLocation();

    this.hotelForm = this.formBuilder.group({
      hotelname: [''],
      location: this.formBuilder.group({
        id: [undefined],
        locationname: [undefined],
      }),
    });

    this.hotelForm.get('location')?.get('locationname')?.valueChanges.subscribe(locationname => {
      const selectedLocation = this.location.find(loc => loc.locationname === locationname);
      if (selectedLocation) {
        this.hotelForm.get('location')?.patchValue({
          id: selectedLocation.id,
          locationname: selectedLocation.locationname
        });
      }
    });
  }

  loadLocation() {
    this.locationService.getAllLocationforHotel().subscribe({
      next: res => {
        this.location = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  createHotel() {
    this.hotel.hotelname = this.hotelForm.value.hotelname;
    this.hotel.location = this.hotelForm.value.location;

    this.hotelService.createHotel(this.hotel).subscribe({
      next: res => {
        this.hotelForm.reset();
        this.router.navigate(['hotelview']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}