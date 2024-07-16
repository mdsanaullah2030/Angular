import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentmodel } from './student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  baseUrl: string = "http://localhost:3000/student/";

  constructor(
    private http: HttpClient
  ) { }
  viewAllStudent(): Observable<any> {

    return this.http.get(this.baseUrl);
  }
  createStudent(students: studentmodel): Observable<studentmodel> {

    return this.http.post<studentmodel>(this.baseUrl, students);

  }



  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + studentId);
    //  return this.http.delete<void>(`${this.baseUrl}${studentId}`);//



  }
  updateStudent(student: studentmodel): Observable<studentmodel> {
    return this.http.put<studentmodel>(`${this.baseUrl}${student.id}`, student);
  }

  getStudentById(studentId: string): Observable<studentmodel> {

    return this.http.get<studentmodel>(this.baseUrl + studentId);
    //return this.http.get<StudentModel>(`${this.baseUrl}${studentId}`);//
  }



}
// updateStudent(updateStudent: studentmodel): Observable<studentmodel> {
//   throw new Error('Method not implemented.'); //eta shesh koiren. return type dewa chilo na taai




