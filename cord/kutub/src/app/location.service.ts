import { HttpClient } from '@angular/common/http';
import { Injectable, reflectComponentType } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
baseUrl:string="http://localhost:3000/locations";

  constructor(private httpClint:HttpClient) { }

  getAllLocation():Observable<any>{
    return this.httpClint.get<any>(this.baseUrl);


    
  }
  createlocation(location:Location):Observable<any>{
    return this.httpClint.post(this.baseUrl,location);


  }

}
