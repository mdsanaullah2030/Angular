import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, Observable, throwError } from 'rxjs';
import { BookingModel } from '../model/booking.model';
import { UserModel } from '../model/user.model';
import { RoomModel } from '../model/room.model';
import { LocationModel } from '../model/location .model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl:string="http://localhost:3000/booking";

  constructor(private httpClient:HttpClient) { }

  getAllbooking():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  createbooking(booking: BookingModel): Observable<BookingModel> {
    return this.httpClient.post<BookingModel>(this.baseUrl, booking)

  }

  getAllLocationforBooking(): Observable<{ users: UserModel[], rooms: RoomModel[], locations: LocationModel[], bookings: BookingModel[] }> {
    return forkJoin({
      users: this.httpClient.get<UserModel[]>(this.baseUrl + '/users'),
      rooms: this.httpClient.get<RoomModel[]>(this.baseUrl + '/rooms'),
      locations: this.httpClient.get<LocationModel[]>(this.baseUrl + '/locations'),
      bookings: this.httpClient.get<BookingModel[]>(this.baseUrl + '/bookings')
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }

}
