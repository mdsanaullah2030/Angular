import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LocationModel } from '../model/location .model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  getAllLocations() {
    throw new Error('Method not implemented.');
  }
  baseUrl: string ="http://localhost:3000/location"
  constructor(
    private httpClinte:HttpClient
  ) { }
  getAlluser():Observable<any>{
    return this.httpClinte.get<any>(this.baseUrl);
  }

  createLocation(user:LocationModel):Observable<any>{
    return this.httpClinte.post(this.baseUrl,user);
  }


  deleteLocation(id:string):Observable<any>{
    return this.httpClinte.delete(this.baseUrl+"/"+id);
    
  }

  updateLocation(id: string, location: LocationModel): Observable<any> {

    return this.httpClinte.put(this.baseUrl + "/" + id, location);

  }
  
  getById(id: string): Observable<any> {
   

    return this.httpClinte.get(this.baseUrl + "/" + id);

  }


  getAllLocationForStudent(): Observable<LocationModel[]> {
    return this.httpClinte.get<LocationModel[]>(this.baseUrl)
    
      .pipe(
        catchError(this.handleError)
      )


  }
 
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));

  }
}
