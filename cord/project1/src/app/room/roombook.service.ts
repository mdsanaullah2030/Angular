import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './model/room.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl:string = "http://localhost:3000/hotel"; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }
}
