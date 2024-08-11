import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  baseUrl:string="http://localhost:3000/User";

  constructor(private httpClient:HttpClient) { }

  getAlluser():Observable<any>{
    return this.httpClient.get(this.baseUrl);

  }
}
