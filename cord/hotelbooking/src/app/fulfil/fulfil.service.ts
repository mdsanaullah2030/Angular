import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FulfilService {
  baseUrl:string="http://localhost:3000/Booking";

  constructor(
    private http:HttpClient
  ) { }
  viewAllfulfil():Observable<any>{

    return this.http.get(this.baseUrl);

  }
}
