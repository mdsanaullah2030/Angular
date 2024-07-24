import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingModel } from './model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings:any;

  baseUrl:string="http://localhost:3000/booking";

  constructor(private httpClient:HttpClient) { }

  getAllBooking():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);

  }

  createbooking(booking:BookingModel):Observable<any>{
    return this.httpClient.post(this.baseUrl,booking);
  }
}
