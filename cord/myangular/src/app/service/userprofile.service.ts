import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private baseUrl="http://localhost:3000/user";

  

  constructor(private http:HttpClient,private authService:AuthService) { }
  getUserProfile():Observable<UserModel |null> {
    return of (this.authService.getUserProfileFormStorage());
  }
}