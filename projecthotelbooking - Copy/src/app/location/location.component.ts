import { Component } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  location:any;
  constructor(
    private locationService:LocationService,
    private router:Router,
    private httpClient:HttpClient
  ){
    
  }
  
  
    ngOnInit(): void {
      this.location=this.locationService.getAlluser();
    }
    deleteLocation(id:string){
      this.locationService.deleteLocation(id)
      .subscribe({
      next:res=>{
        this.location=this.locationService.getAlluser();
        this.router.navigate(['location']);
      },
        
      error: error => {
        console.log(error);
      
      }
      });
      
      }
      updateLocation(id:string){
        this.router.navigate(['updatelocation',id])
      }
}
