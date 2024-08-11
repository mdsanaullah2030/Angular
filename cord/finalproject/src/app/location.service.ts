import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
baseUrl:string="http://localhost:3000/locations";



  constructor(private httpClint:HttpClient) { }
}
