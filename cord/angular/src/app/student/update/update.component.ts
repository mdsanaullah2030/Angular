import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../location/location.model';
import { studentmodel } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../location.service';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  studentForm!: FormGroup;
  locations: Location[] = [];
  studentId:string="";
  student: studentmodel = new studentmodel();


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private studentService: StudentService

  ) { }
  ngOnInit(): void {
    this.student = this.route.snapshot.params['id'];
    console.log(this.student);

    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.formBuilder.group({
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
    this.loadStudentDetails()

  }

  loadLocation(): void {
    this.locationService.getLocationForStudent().subscribe({
      next: (res: Location[]) => {
        this.locations = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  loadStudentDetails(): void {
    this.studentService.getStudentById(this.studentId).subscribe({
      next: (student: studentmodel) => {
        this.student = student;
        this.studentForm.patchValue({
          name: student.name,
          email: student.email,
          cellNo: student.cellNo,
          location: student.location
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
  updateStudent(): void {

    const updatedStudent: studentmodel = {
      ...this.student,
      ...this.studentForm.value
    };
    this.studentService.updateStudent(updatedStudent).subscribe({
      next: res => {
        console.log('Student updated successfully:', res);
        this.router.navigate(['student']); // Navigate to the students list after update
      },
      error: err => {
        console.log('Error updating student:', err);
      }
    });

  }

  }










