
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = "http://localhost:3000/students";

  constructor(
    private http: HttpClient
  ) { }
  viewAllStudent(): Observable<any> {

    return this.http.get(this.baseUrl);
  }
  // createStudent()  //
  createStudent(student:StudentModel):Observable<StudentModel>{
    return this.http.post<StudentModel>(this.baseUrl,student);


  }

  
  deleteStudent(id: string): Observable<any> {
    // return this.http.delete<void>(`${this.baseUrl}${studentId}`);
    //Error ID Null hole +"/"++ID na dile//
    return this.http.delete(this.baseUrl+"/"+id);
  }
  updateStudent(student:StudentModel):Observable<StudentModel>{
    console.log(student);
    // return this.http.delete<void>(this.baseUrl+studentId);
    // return this.http.put<StudentModel>(`${this.baseUrl}${student.id}`,student);
    return this.http.put<StudentModel>(this.baseUrl + student.id, student);
  }
  getStudentById(studentId:string):Observable<StudentModel>{
    // return this.http.get<StudentModel>(`${this.baseUrl} ${studentId}`);
    //baseUrl+studentId  avabe likha jab//
    return this.http.get<StudentModel>(this.baseUrl + studentId);
  }

}
