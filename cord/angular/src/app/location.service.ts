import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
baseUrl:string="http://localhost:3000/locations";



  constructor(private httpClint:HttpClient) { }

  getAllLocation():Observable<any>{

return this.httpClint.get(this.baseUrl);

  }
  
  cretelocation(location:Location):Observable<any>{
    return this.httpClint.post(this.baseUrl,location)



  }
  deleteLocation(id:string):Observable<any>{
    return this.httpClint.delete(this.baseUrl+"/"+id);
  }

  updateLocation(id:string,location:Location):Observable<any>{
return this.httpClint.put(this.baseUrl+"/"+id,location);

  }
  getById(id:string):Observable<any>{

return this.httpClint.get(this.baseUrl+"/"+id)

  }

}
