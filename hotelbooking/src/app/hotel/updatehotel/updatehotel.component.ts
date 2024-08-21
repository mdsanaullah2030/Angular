import { Component, OnInit } from '@angular/core';
import { HotelModel } from '../../model/hotel.model';
import { LocationModel } from '../../model/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../service/location.service';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrl: './updatehotel.component.css'
})
export class UpdatehotelComponent implements OnInit{
hotel:HotelModel=new HotelModel();
location:LocationModel[]=[];
hoteleId:string="";
hotelForm!:FormGroup;

constructor(
  private locationService: LocationService,
  private hotelService: HotelService,
  private fromBuilder: FormBuilder,
  private router: Router,
  private route: ActivatedRoute
) { }
  ngOnInit(): void {
    this.hoteleId = this.route.snapshot.params['id'];
    console.log(this.hoteleId);
    this.hotelForm=this.fromBuilder.group({ 

    hotelname:[''],
    location:this.fromBuilder.group({

id:[undefined],
locationname:[undefined]
    })
  })
  this.loadLocation();
  this.loadHotelDetails();
  }

  loadLocation(): void {
    this.locationService.getAllLocationforHotel()
      .subscribe({
        next: (res: LocationModel[]) => {
          this.location = res;

        },

        error: er => {
          console.log(er);

        }
      });

  }
  loadHotelDetails(): void {
    this.hotelService.getByHoteluId(this.hoteleId)
      .subscribe({
        next: (hotel: HotelModel) => {
          this.hotel = this.hotel;
          this.hotelForm.patchValue({
            hotelnamee: hotel.hotelname,
           
            location: hotel.location
          });
        },

        error: error => {
          console.log(error);
        }
      });
  }
  updateHotel(): void {
    const updateHotel: HotelModel = {

      ...this.hotel,
      ...this.hotelForm.value

    };

    this.hotelService.updateHotel(updateHotel)
      .subscribe({
        next: res => {

          console.log('hotel update successfully:', res);
          this.hotelForm.reset();
          this.router.navigate(['hotelview']);
        },
        error: error => {

          console.log('Error updating hotel:', error);
        }

      });
}

}
