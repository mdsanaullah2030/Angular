import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users: any;
  baseUrl: string ="http://localhost:3000/User"
  constructor(
    private httpClinte:HttpClient
  ) { }
  getAlluser():Observable<any>{
    return this.httpClinte.get<any>(this.baseUrl);
  }
  
  createUser(user:UserModel):Observable<any>{
    return this.httpClinte.post(this.baseUrl,user);
  }
  deleteUser(id:string):Observable<any>{
    return this.httpClinte.delete(this.baseUrl+"/"+id);
    
  }
  updateUser(id:string,user:UserModel):Observable<any>{
    return this.httpClinte.put(this.baseUrl+"/"+id,user);
  }
  getById(id:string):Observable<any>{
    return this.httpClinte.get(this.baseUrl+"/"+id);
  }

  getAllUserForView():Observable<UserModel[]>{
    return this.httpClinte.get<UserModel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)

    )
  }
  private handleError(error:any){
    console.error('An error occurred:', error);
    return throwError(()=>new Error('test'));

  }
}
