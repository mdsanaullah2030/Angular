import { Component, OnInit } from '@angular/core';
import { bookingmodel } from '../model/booking.model';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updatebooking',
  templateUrl: './updatebooking.component.html',
  styleUrl: './updatebooking.component.css'
})
export class UpdatebookingComponent implements OnInit {
  id: string = "";
  booking: bookingmodel = new bookingmodel();

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }




  ngOnInit(): void {
    this.booking = new bookingmodel();
    this.id = this.route.snapshot.params['id'];
    this.bookingService.getById(this.id)
      .subscribe({
        next: res => {
          this.booking = res;
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      })

  }
  updatebooking() {
    this.bookingService.updatebooking(this.id, this.booking)
      .subscribe({
        next: res => {
          this.router.navigate(['booking'])
        },
        error: err => {
          console.log(err);
        }
      })
  }

}
