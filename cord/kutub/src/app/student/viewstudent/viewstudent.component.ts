import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../model/student.model';
import { Router } from '@angular/router';
import { LocationService } from '../../location.service';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit{

  students: any;
  locations: any;
  
  constructor(
    //json locationservice data + studentservice data niche //
    private locationService:LocationService,
    private ststudentService:StudentService,
    
    private router: Router

  ) {


  }
//Tohid vai git hote html form and componet copy korechi//
//  getAllLocationForStudent location service mathod ache oi name///
  ngOnInit(): void {
    this.locations=this.locationService.getAllLocationForStudent();
    this.students=this.ststudentService.viewAllStudent();
    
  }
  deleteStudent(id:string){
    this.ststudentService.deleteStudent(id).subscribe({
      next:res=>{
        this.students=this.ststudentService.viewAllStudent();
        this.router.navigate(['/student']);

      },
      error:error=>{
        console.log(error);
      }
    });
  }
  editStudent(student: StudentModel): void {
    
    this.router.navigate(['/updateStudent', student.id]);}

  }


