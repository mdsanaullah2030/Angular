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

  private service:StudentService,
  private locatnService:LocationService,


)

  
{}

  ngOnInit(): void {
    
this.locatnService.getAllLocation().subscribe(locations=>{
  this.locations=locations;

});


  }
  loadStudents(){

    this.service.viewAllStudent().subscribe(
      
    )
  }

}
