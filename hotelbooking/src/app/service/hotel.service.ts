import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelModel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseUrl: string = "http://localhost:3000/hotel";
  constructor(private http: HttpClient) { }


  viewAllHotel(): Observable<any> {
    return this.http.get(this.baseUrl);

  }

  createHotel(hotels: HotelModel): Observable<HotelModel> {
    return this.http.post<HotelModel>(this.baseUrl, hotels)

  }
}
