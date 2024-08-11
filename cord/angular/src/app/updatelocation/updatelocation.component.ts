import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location.model';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrl: './updatelocation.component.css'
})
export class UpdatelocationComponent implements OnInit {
  id: string = "";
  location: Location = new Location();

  constructor(
    private locatinService: LocationService,
    private router: Router,
    private route: ActivatedRoute,


  ) { }




  ngOnInit(): void {
    this.location = new Location();
    this.id = this.route.snapshot.params['id'];
    this.locatinService.getById(this.id)
      .subscribe({
        next: res => {
          this.location = res;
          console.log(res);


        },
        error: err => {
          console.log(err);
        }
      })
  }


  updateLocation() {
    this.locatinService.updateLocation(this.id, this.location)
      .subscribe({

        next: res => {

          this.router.navigate(['location']);


        },


  error: err => {
          console.log(err);
        }
      });


  }

}
