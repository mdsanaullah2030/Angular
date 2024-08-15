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

  CoxsBazar: { value: string, label: string }[] = [
    { value: 'Best Western Heritage', label: 'Best Western Heritage' },
    { value: 'Long Beach Hotel', label: 'Long Beach Hotel' },
    { value: 'Ocean Paradise Hotel & Resort', label: 'Ocean Paradise Hotel & Resort' },
    { value: 'Sayeman Beach Resort', label: 'Sayeman Beach Resort' },
    { value: 'Hotel Prime Park', label: 'Hotel Prime Park' },
  ];
  
  Dhaka: { value: string, label: string }[] = [
    { value: 'The Westin Dhaka', label: 'The Westin Dhaka' },
    { value: 'Hotel Bengal Blue Berry', label: 'Hotel Bengal Blue Berry' },
    { value: 'Amari Dhaka Bangladesh', label: 'Amari Dhaka Bangladesh' },
    { value: 'Renaissance Dhaka Gulshan Hotel', label: 'Renaissance Dhaka Gulshan Hotel' },
  ];

  Sylhet: { value: string, label: string }[] = [
    { value: 'Grand Sylhet Hotel & Resort', label: 'Grand Sylhet Hotel & Resort' },
    { value: 'Hotel Noorjahan Grand', label: 'Hotel Noorjahan Grand' },
    { value: 'Nirvana Inn', label: 'Nirvana Inn' },
    { value: 'Rose View Hotel', label: 'Rose View Hotel' },
    { value: 'Britannia Hotel', label: 'Britannia Hotel' },
  ];

  Chittagong: { value: string, label: string }[] = [
    { value: 'The Peninsula Chittagong', label: 'The Peninsula Chittagong' },
    { value: 'Hotel Hoque Tower International', label: 'Hotel Hoque Tower International' },
    { value: 'Well Park Residence Boutique Hotel', label: 'Well Park Residence Boutique Hotel' },
    { value: 'Grand Park Hotel', label: 'Grand Park Hotel' },
  ];

  Sreemangal: { value: string, label: string }[] = [
    { value: 'Balishira Resort Ltd', label: 'Balishira Resort Ltd' },
    { value: 'Srimangal Tea Resort', label: 'Srimangal Tea Resort' },
    { value: 'Tea Villa Luxury Resort', label: 'Tea Villa Luxury Resort' },
  ];

  Kuakata: { value: string, label: string }[] = [
    { value: 'Sikder Resort & Villas', label: 'Sikder Resort & Villas' },
    { value: 'Hotel Graver Inn International', label: 'Hotel Graver Inn International' },
    { value: 'Hotel Radiation', label: 'Hotel Radiation' },
    { value: 'Cinderella Resort', label: 'Cinderella Resort' },
  ];

  constructor(
    private locationService: LocationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      CoxsBazar: [''],
      Dhaka: [''],
      Sylhet: [''],
      Chittagong: [''],
      Sreemangal: [''],
      Kuakata: [''],
    });
  }

  createLocation() {
    this.user.CoxsBazar = this.formValue.value.CoxsBazar;
    this.user.Dhaka = this.formValue.value.Dhaka;
    this.user.Sylhet = this.formValue.value.Sylhet;
    this.user.Chittagong = this.formValue.value.Chittagong;
    this.user.Sreemangal = this.formValue.value.Sreemangal;
    this.user.Kuakata = this.formValue.value.Kuakata; // Correct assignment

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