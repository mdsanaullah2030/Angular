import { Component, OnInit } from '@angular/core';

import { StudentModel } from '../../student/student.model';
import { bookingModel } from '../model/booking.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../service/booking.service';
import { StudentService } from '../../student/student.service';
import { Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrl: './createbooking.component.css'
})
export class CreatebookingComponent implements OnInit{
  student:StudentModel[]=[];
  // location:Location[]=[];
  bookings:bookingModel[]=[];
  bookingForm!:FormGroup;
  booking:bookingModel=new bookingModel();

  constructor(
    private bookingService:BookingService,
    private studentService:StudentService,
    private formBuilder:FormBuilder,
    private routter:Router
  ){

  }

  ngOnInit(): void {
    this.loadStudent();
    
    this.bookingForm=this.formBuilder.group({
      seating:[''],
      child:[''],
      student:this.formBuilder.group({

        id: [undefined],
        name: [undefined],
        email: [undefined],
        cellNo: [undefined],
      
  


      })

    });
    //student boking student model//
    this.bookingForm.get('student')?.get('name')?.valueChanges
    .subscribe(name=>{

      const selectedStudent=this.student.find(loc=>loc.name===name);
      
     if(selectedStudent){
      this.bookingForm.patchValue({student:selectedStudent});

     }


    });
  }
  loadStudent() {
    this.studentService.getAllStudentforBooking()
    .subscribe({
      next: res => {
        // this.student = res;
      },
      error: error => {
        console.log(error);

      }
    })
  }
  createBoking(){

this.booking.seating=this.bookingForm.value.seating;
this.booking.child=this.bookingForm.value.child;
this.booking.student=this.bookingForm.value.student;

this.bookingService.createBooking(this.booking)
.subscribe({
  next:res=>{
    this.loadStudent();
    this.bookingForm.reset();
    this.routter.navigate(['viewbooking']);


  },
  error:error=>{
    console.log(error);

  }

})





  }

}


