import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentmodel } from './student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string="http://localhost:3000/student/";

  constructor(
    private http:HttpClient
  ) { }
  viewAllStudent():Observable<any>{

    return this.http.get(this.baseUrl);
  }
  createStudent(students:studentmodel):Observable<studentmodel>{

    return this.http.post<studentmodel>(this.baseUrl,students);

  }

  deleteStudent(studentId:string):Observable<void>{
    return this.http.delete<void>(this.baseUrl+studentId);
    //  return this.http.delete<void>(`${this.baseUrl}${studentId}`);//



  }
getStudentById(studentId:string):Observable<studentmodel>{

  return this.http.get<studentmodel>(this.baseUrl+studentId);
  //return this.http.get<StudentModel>(`${this.baseUrl}${studentId}`);//
}

 

}


  

