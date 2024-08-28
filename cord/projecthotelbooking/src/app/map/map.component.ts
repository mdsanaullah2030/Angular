import { Component } from '@angular/core';
import { MapGeocoder, MapGeocoderResponse } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = {lat: 40.730610, lng: -73.935242};
  zoom = 12;

 
  constructor(private geocoder: MapGeocoder) {}

  geocodeAddress(address: string) {
    this.geocoder.geocode({ address }).subscribe((results: MapGeocoderResponse) => {
      if (results.status === 'OK' && results.results[0]) {
        this.center = {
          lat: results.results[0].geometry.location.lat(),
          lng: results.results[0].geometry.location.lng()
        };
      }
    });
  }
}


