import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

//Student//
getLocationForStudent():Observable<Location[]>{
  return this.httpClint.get<Location[]>(this.baseUrl)
  .pipe(
    catchError(this.handleError)
  )


}

//Successfuly hole amra  data pab//

//na hole error asbe//
 private handleError(error:any){
console.error('an error occurred:',error);
return throwError(()=> new error('test'));

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
