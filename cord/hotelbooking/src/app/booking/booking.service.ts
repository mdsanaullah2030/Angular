import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { bookingmodel } from './model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl:string="http://localhost:3000/user";

  constructor(private httpClint:HttpClient) { 
    

  }
  getAllBooking():Observable<any>{
    return this.httpClint.get<any>(this.baseUrl);
  }

  createbooking(booking:bookingmodel):Observable<any>{
    return this.httpClint.post(this.baseUrl,booking);


  }
  deletebooking(id:string):Observable<any>{
    return this.httpClint.delete(this.baseUrl+"/"+id);
  }
  updatebooking(id:string, booking:bookingmodel):Observable<any>{
    return this.httpClint.put(this.baseUrl+"/"+id,booking);

  }
  getById(id:string):Observable<any>{
    return this.httpClint.get(this.baseUrl+"/"+id);
  }

  getAllBookingForFulfil():Observable<bookingmodel[]>{
    return this.httpClint.get<bookingmodel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)

    )


  }
  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(()=>new Error('test'));
  }
  
 
}
