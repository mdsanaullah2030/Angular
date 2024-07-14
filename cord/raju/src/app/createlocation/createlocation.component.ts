import { Component, OnInit } from '@angular/core';
import { location } from '../location/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationComponent } from '../location/location.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit{

location:location=new location();
formValue!:FormGroup;
locationData:any;


constructor(

private locationService:LocationComponent,
private router:Router,
private httpClinent:HttpClient,
private formBuilder:FormBuilder


){}

  ngOnInit(): void {
   this.formValue=this.formBuilder.group({
name:[''],
city:[''],
state:[''],
photo:[''],
availableUnits:[''],
wifi:[false],
laundry:[false],


   });
  }
  createLocation(){   

this.location.name=this.formValue.value.name;
this.location.city=this.formValue.value.city;
this.location.state=this.formValue.value.state;
this.location.photo=this.formValue.value.photo;
this.location.availableUnits=this.formValue.value.availableUnits;
this.location.wifi=this.formValue.value.wifi;
this.location.laundry=this.formValue.value.laundry;

  }


}
