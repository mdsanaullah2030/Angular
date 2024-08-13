import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../model/location .model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit{

  user:LocationModel=new LocationModel();
  fromValue!:FormGroup;
  userData:any;

  constructor(
    private locationService:LocationService,
    private router:Router,
    private httpClicent:HttpClient,
    private formBulder:FormBuilder,
  ){
    
  }

  

  ngOnInit(): void {
    this.fromValue = this.formBulder.group({

    
      CoxsBazar:[''],
      Dhaka:[''],
      Sylhet:[''],
      Chittagong:[''],
      Sreemangal:[''],
      Kuakata:[''],
    


    });
  }
  createLocation(){

    this.user.CoxsBazar=this.fromValue.value.CoxsBazary;
    this.user.Dhaka=this.fromValue.value.Dhaka;
    this.user.Sylhet=this.fromValue.value.Sylhet;
    this.user.Chittagong=this.fromValue.value.Chittagong;
    this.user.Sreemangal=this.fromValue.value.Sreemangal;
    this.user.Sreemangal=this.fromValue.value.Sreemangal;

    this.locationService.createLocation(this.user)
    .subscribe({
      next: res => {
        console.log(res);
        this.fromValue.reset();
        this.router.navigate(['/location']);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
