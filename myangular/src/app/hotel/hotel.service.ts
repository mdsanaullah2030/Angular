import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseUrl:string="http://localhost:3000/Hotel";


  constructor(private httpClient:HttpClient) { }
  getAllhotel():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
}
