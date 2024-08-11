import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';



import { Location } from '../location/location.model';
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
    private locationService: LocationService,
    private router: Router,
    //je Id Edit clik korbo oi ID url asbe oita  ActivatedRoute url ID Edit hobe//
    private route: ActivatedRoute,


  ) {


  }


  ngOnInit(): void {
    this.location = new Location();
    //url majhe je ID ache oi Id Chach korepre amr ID Filaup koro//
    this.id = this.route.snapshot.params['id'];
    //Edite form anbe oi ID//
    this.locationService.getById(this.id)
      .subscribe({
        next: res => {
          //Edit por data ke location Add kore dibe//
          this.location = res;
          console.log(res);
        },

        error: err => {
          console.log(err);

        }

      });

  }

//OnInit kore data aslo//
  updateLocation() {

    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: res => {
          //this.location=new Location();
          //upre veriabol router na diklar korle navigate sagust korbe na//
          this.router.navigate(['location']);

        },
        error: err => {
          console.log(err);

        }

      });


  }

}



