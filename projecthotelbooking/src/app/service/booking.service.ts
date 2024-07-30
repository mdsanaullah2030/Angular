import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl:string="http://localhost:3000/booking";

  constructor(private httpClient:HttpClient) { }

  getAllbooking():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}
