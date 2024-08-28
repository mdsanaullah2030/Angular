import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { HotelService } from '../../service/hotel.service';
import { Router } from '@angular/router';
import { HotelModel } from '../../model/hotel.model';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrl: './viewhotel.component.css'
})
export class ViewhotelComponent implements OnInit{

    hotels: HotelModel[] = [];
    locations: any;
  
    constructor(
      private locationService: LocationService,
      private hotelService: HotelService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.loadHotels();
      this.locations = this.locationService.getAllLocationforHotel();
    }
  
    loadHotels() {
      this.hotelService.viewAllHotel().subscribe({
        next: (data) => {
          this.hotels = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  
    deleteHotel(id: string) {
      this.hotelService.deleteHotel(id).subscribe({
        next: (res) => {
          
          this.loadHotels();
        },
        error: (er) => {
          console.error(er);
        }
      });
    }
  
    editHotel(hotel: HotelModel): void {
      this.router.navigate(['/updateHotel', hotel.id]);

  
    }
    createHotel(){
      this.router.navigateByUrl('/createHotel');

    }
  }



