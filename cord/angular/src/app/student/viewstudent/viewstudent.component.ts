import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {

students: any;
locations:any;

constructor(

  private studentService:StudentService,
  private locatnService:LocationService,


)

  
{}

  ngOnInit(): void {
    
this.locations=this.locatnService.getLocationForStudent();
this.students=this.studentService.viewAllStudent


  }


}
