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

  user: LocationModel = new LocationModel();
  formValue!: FormGroup;
  userData: any;



  constructor(
    private locationService: LocationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient:HttpClient,
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
    
    });
  }

  createLocation() {
    this.user.name = this.formValue.value.name;
    
    this.locationService.createLocation(this.user).subscribe({
      next: res => {
        console.log(res);
        this.formValue.reset();
        this.router.navigate(['/location']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}