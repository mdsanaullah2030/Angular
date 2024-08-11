import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomModel } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl: string = "http://localhost:3000/room";
  constructor(private httpClient:HttpClient) { }

  getAllRoom(): Observable<any> {

    return this.httpClient.get(this.baseUrl);

  }

  createroom(room:RoomModel):Observable<any>{
    return this.httpClient.post(this.baseUrl,room);

  }
  deleteroom(id:string):Observable<any>{
return this.httpClient.delete(this.baseUrl+"/"+id);
  }


  updateroom(id:string,user:RoomModel):Observable<any>{
    return this.httpClient.put(this.baseUrl+"/"+id,user);
  }
  getById(id:string):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }

  getAllForRoomView():Observable<RoomModel[]>{
    return this.httpClient.get<RoomModel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)

    )
  }
  private handleError(error:any){
    console.error('An error occurred:', error);
    return throwError(()=>new Error('test'));

  }
}
