import { HttpClient } from '@angular/common/http';
import { Injectable, reflectComponentType } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations:any;

  baseUrl: string = "http://localhost:3000/locations";

  constructor(private httpClint: HttpClient) { }

  getAllLocation(): Observable<any> {
    return this.httpClint.get<any>(this.baseUrl);



  }
  createlocation(location: Location): Observable<any> {
    return this.httpClint.post(this.baseUrl, location);


  }
  deleteLocation(id: string): Observable<any> {
    return this.httpClint.delete(this.baseUrl + "/" + id);
    //  http://localhost:3000/locations/id
  }
  updateLocation(id: string, location: Location): Observable<any> {

    return this.httpClint.put(this.baseUrl + "/" + id, location);

  }
  
  getById(id: string): Observable<any> {
    //basUrl+id Add kore Delete korbe//

    return this.httpClint.get(this.baseUrl + "/" + id);

  }

  //json hote data dekhabe tar jon new mathod//
  ////

  getAllLocationForStudent(): Observable<Location[]> {
    return this.httpClint.get<Location[]>(this.baseUrl)
    //pipe kaj hoche map banano file banano//
      .pipe(
        catchError(this.handleError)
      )


  }
  //private handleError return na shes korle upre retun Error asbe//
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));

  }
}






