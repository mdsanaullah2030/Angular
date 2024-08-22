import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomModel } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl: string = "http://localhost:3000/room";
  constructor(private http:HttpClient) { }


  viewAllRoom(): Observable<any> {
    return this.http.get(this.baseUrl);

  }

  createRoom(room: RoomModel): Observable<RoomModel> {
    return this.http.post<RoomModel>(`${this.baseUrl}`, room);
  }

  deleteRoom(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
