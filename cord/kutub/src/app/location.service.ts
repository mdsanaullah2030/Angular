import { HttpClient } from '@angular/common/http';
import { Injectable, reflectComponentType } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
baseUrl:string="http://localhost:3000/locations";

  constructor(private httpClint:HttpClient) { }

  getAllLocation():Observable<any>{
    return this.httpClint.get<any>(this.baseUrl);

    
    
    


  }


}
