import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

  getAllLocationforBooking():Observable<UserModel[],RoomModel[],LocationModel[],BookingModel>{
    return this.httpClient.get<Location[],RoomModel[],LocationModel[],BooleanConstructor[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )

  }

  private handleError(error: any) {
    
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }

}
