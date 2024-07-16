import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { LocationService } from '../../location.service';
import { studentmodel } from '../student.model';
import { Router } from '@angular/router';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {


  students: any;
  locations: any
  constructor(private Studentservice: StudentService,
    private locationService: LocationService,
    private router: Router

  ) {


  }


  ngOnInit(): void {
    this.locations = this.locationService.getLocationForStudent();

    this.students = this.Studentservice.viewAllStudent();
  }
  deleteStudents(id:string){

    this.Studentservice.deleteStudent(id)
    .subscribe({
      next:rs=>{
        this.students=this.Studentservice.viewAllStudent();
        this.router.navigate(['/students']);


      },
      error:error=>{
        console.log(error);
      }


    })
  }
  editStudent(student: studentmodel): void {
    // Navigate to the edit student component with the student's ID
    this.router.navigate(['/updatestudent', student.id]);
  }
}