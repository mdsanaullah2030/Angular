import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

  deletebooking(id:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);

  }
  updateBooking(id:string,booking:BookingModel):Observable<any>{
    return this.httpClient.put(this.baseUrl+"/"+id,booking);

  }
  getById(id:string):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);

  }
  getAllFormBooking():Observable<BookingModel[]>{
    return this.httpClient.get<BookingModel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
}
}
