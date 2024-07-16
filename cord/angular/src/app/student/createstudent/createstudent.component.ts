import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { studentmodel } from '../student.model';
import { StudentService } from '../../student.service';
import { LocationService } from '../../location.service';
import { Router } from '@angular/router';
import { Location } from '../../location/location.model';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit {
  locations: Location[] = [];
  students: StudentComponent[] = [];
  studentForm!: FormGroup;
  student: studentmodel = new studentmodel();


  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router


  ) {

  }

  ngOnInit(): void {
    this.loadLocation();
    this.studentForm = this.formBuilder.group({
      //['']tabler data faka korlam//
      name: [''],
      email: [''],
      cellNo: [''],
      ///location hote id name city ... data usy kora jabe/
      location: this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined],



      })



    });
    //studentForm data nilo location hote  name data valuchanges kora jabe name ta //
    this.studentForm.get('location')?.get('name')?.valueChanges.subscribe(name => {
      const selectedLocation = this.locations.find(loc => loc.name === name);
      if (selectedLocation) {
        this.studentForm.patchValue({ location: selectedLocation });
      }
    });



  } loadLocation() {

    this.locationService.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: err => {
          console.log(err);

        }


      });


  }
  createStudent() {

    this.student.name = this.studentForm.value.name;
    this.student.email = this.studentForm.value.email;
    this.student.cellNo = this.studentForm.value.cellNo;
    this.student.location = this.studentForm.value.location;

    this.studentService.createStudent(this.student)
      .subscribe({

        next: res => {
          this.loadLocation();
          this.studentForm.reset();
          this.router.navigate(['student']);

        },
        error: err => {

          console.log(err);
        }
      });


  }



}







