import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from '../../model/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../location.service';
import { Location } from '../../location/location.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent implements OnInit{

  studentForm!: FormGroup;
  locations: Location[] = [];
  stusentId: string = "";
  student: StudentModel = new StudentModel();


  constructor(
    private formBilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private studentService:StudentService

  ) { }

  ngOnInit(): void {


    this.stusentId = this.route.snapshot.params['id'];


    console.log(this.stusentId);

    this.studentForm = this.formBilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.formBilder.group({
        id: [undefined],
        name: [undefined],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })
    });

    this.loadLocation();
    this.loadStudentDetails();
  }


  loadLocation():void {
  
this.locationService.getAllLocationForStudent().subscribe({

  next:(res:Location[])=>{
    this.locations=res;
  },
  error:err=>{
    console.log(err);
  }
});


  }

  loadStudentDetails():void {
    this.studentService.getStudentById(this.stusentId).subscribe({
next:(stutdent:StudentModel)=>{
//student kothai hote ase dekhte hobe//
  this.student=this.student;
  this.studentForm.patchValue({
   name:stutdent.name,
   email:stutdent.email,
   cellNo:stutdent.cellNo,
   location:stutdent.location

  });
},
error: err => {
  console.log(err);
}

    });
 
  }
  updateStudent(): void{

const updateStudent:StudentModel={
...this.student,
...this.studentForm.value

};
this.studentService.updateStudent(updateStudent).subscribe({
next:res=>{
  console.log('Student updated successfully:', res);
  this.router.navigate(['viewstudent']);
},
error: err => {
  console.log('Error updating student:', err);
}

});

  }

}


