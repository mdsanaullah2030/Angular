import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;
  baseUrl: string = 'http://localhost:3000/User';
  constructor(private httpClint: HttpClient) {

  }
  getAlluser(): Observable<UserModel[]> {
    return this.httpClint.get<UserModel[]>(this.baseUrl);

  }

  createUser(user:UserModel):Observable<any>{
    return this.httpClint.post(this.baseUrl,user);
  }
  deleteUser(userid:string):Observable<any>{
    return this.httpClint.delete(this.baseUrl+"/"+userid);
  }
}
