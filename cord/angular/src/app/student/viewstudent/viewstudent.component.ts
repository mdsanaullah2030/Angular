import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { LocationService } from '../../location.service';
import { studentmodel } from '../student.model';
import { Router } from '@angular/router';
import { fork } from 'child_process';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {

students:studentmodel []=[];
locations:Location[]=[];

constructor(

  private studentService:StudentService,
  private locatnService:LocationService,
  private router:Router


)

  
{}

  ngOnInit(): void {
    
this.loadData();


  }
loadData():void{
  forkJoin({
    locations: this.locatnService.getLocationForStudent(),
    students: this.studentService.viewAllStudent()
  }).subscribe({
    next: ({ locations, students }) => {
      this.locations = locations;
      this.students = students;
    },
    error: err => {
      console.log(err);
    }
  });

}
