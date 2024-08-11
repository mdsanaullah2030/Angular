import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room.model';
import { RoomService } from '../../service/room.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-roomupdate',
  templateUrl: './roomupdate.component.html',
  styleUrl: './roomupdate.component.css'
})
export class RoomupdateComponent implements OnInit {

  id: string = "";
  room: RoomModel = new RoomModel();


  constructor(
    private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.room = new RoomModel();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getById(this.id)
      .subscribe({
        next: res => {

          console.log(res);
          this.room = res;
        },
        error: err => {
          console.log(err);

        }

      });
  }

  updateroom() {
    this.roomService.updateroom(this.id, this.room)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/viewroom']);
        },
        error: err => {
          console.log(err);
        }

      })


  }

}
