import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  locations: any;

  constructor
    (private locationService: LocationService,
      private router: Router,
      private httpClient: HttpClient) {


  }
  ngOnInit(): void {

    this.locations = this.locationService.getAllLocation();
  }
  deleteLocation(id: string) {
    //location service hote delete mathod call dite (ID)//
    this.locationService.deleteLocation(id)
      .subscribe({
        next: res => {
          this.locations = this.locationService.getAllLocation();
          //navigate error asle Router angular hote nite hobe//
          this.router.navigate(['location']);
          //success hole navigate hoye location jabe//
        },
        error: error => {
          console.log(error);

        }

      });

  }
  //Location updatelocation ke call dilam path akoy name dite hobe//

  updateLocation(id: string) {
    this.router.navigate(['updatelocation', id]);


  }
  createlocation() {
    this.router.navigate(['createlocation']);
  }
}