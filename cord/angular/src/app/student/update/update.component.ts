import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../location/location.model';
import { studentmodel } from '../student.model';
import {  ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../location.service';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
 studentForm!:FormGroup;
 locations:Location[]=[];
 studentId:studentmodel=new studentmodel();


constructor(
private formBuilder:FormBuilder,
private router:Router,
private route:ActivatedRoute,
private locationService:LocationService,
private studentService:StudentService

){}
  ngOnInit(): void {
   this.studentId=this.route.snapshot.params['id'];
   console.log(this.studentId);

   this.studentForm=this.formBuilder.group({
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
   this.lo
    
  }
  loadLocation() {
    throw new Error('Method not implemented.');
  }


}
