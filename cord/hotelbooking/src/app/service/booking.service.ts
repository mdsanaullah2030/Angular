import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingModel } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl: string = "http://localhost:3000/booking";
  constructor(private http: HttpClient) { }


  viewAllBooking(): Observable<any> {
    return this.http.get(this.baseUrl);

  }
  
  createBooking(booking: BookingModel): Observable<BookingModel> {
    return this.http.post<BookingModel>(`${this.baseUrl}`, booking);
  }
}
