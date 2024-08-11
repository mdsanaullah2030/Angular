
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookingModel } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

baseUrl:string="http://localhost:3000/booking";
constructor(private httpClient:HttpClient){}
viewAllBooking():Observable<any>{
  return this.httpClient.get(this.baseUrl);

}
//viewAllBooking httpClient variabol niyechi tai createBooking httpCliend//
   createBooking(bookings:bookingModel):Observable<bookingModel>{
    return this.httpClient.post<bookingModel>(this.baseUrl,bookings)

   } 

}
