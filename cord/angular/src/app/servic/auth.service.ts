import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { catchError, map, Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:3000/user";
  constructor(
    private http: HttpClient,

  ) { }
  registration(user: UserModel): Observable<AuthResponse> {
    return this.http.post<UserModel>(this.baseUrl, user).pipe(
      map(
        //newUser  je form filup korbe akta veriabol//
        //btoa 2 data ke add kore token banabe token=name+password//

        (newUser: UserModel) => {
          const token = btoa('${newUser.email}${newUser.password}');
          //return  2 ta karon authResponse 2 ta acche//
          return { token, user: newUser } as AuthResponse;

        }

      )

    )

  }
  //token ke stok korbe //
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }


//(akadhik ara mitar pass kora jon List banalam)//
  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    let params = new HttpParams();
    //Rejistation kora somay je name email dilam Credentials hote params nib//
    params = params.append('email', credentials.email);

    return this.http.get<UserModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            return { token, user } as AuthResponse;
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(err => {
        console.error('Login error', err);
        throw err;
      })
    );
  }



  logout(): void {
    // token remove korche server amr add hote hote hole loging korte hobe toke delete hoyeche //
    localStorage.removeItem('token');
  }


  getToken(): string | null {
    //user token== url open hobe na hole null //
    return localStorage.getItem('token');
  }
}
