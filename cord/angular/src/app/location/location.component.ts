import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
updateLocation(arg0: any) {
throw new Error('Method not implemented.');
}
  locations: any;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private httpClient: HttpClient



  ) {
  }


  ngOnInit(): void {
    this.locations = this.locationService.getAllLocation();
  }
  deleteLocation(id: string) {

    this.locationService.deleteLocation(id)
      .subscribe({
        next: res => {
          this.locations = this.locationService.getAllLocation();

          this.router.navigate(['/location']);
        },
        error: error => {
          console.log(error);

        }
      })

  }

}
