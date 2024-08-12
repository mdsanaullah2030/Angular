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

  roomtyp: { value: string, label: string }[] = [
    { value: 'Single Room', label: 'Single Room' },
    { value: 'Double Room', label: 'Double Room' },
    { value: 'Triple Room', label: 'Triple Room' },
    { value: 'Family Room', label: 'Family Room' },
    { value: 'Superior Room', label: 'Superior Room' },
    { value: 'Executive Room', label: 'Executive Room' },
    { value: 'Presidential Suite', label: 'Presidential Suite' },
  ];

  status: { value: string, label: string }[] = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Confirmed', label: 'Confirmed' },
    { value: 'Checked-in', label: 'Checked-in' },
    { value: 'Checked-out', label: 'Checked-out' },
    { value: 'Cancelled', label: 'Cancelled' },
    { value: 'Payment Received', label: 'Payment Received' },
    { value: 'Completed', label: 'Completed' },
  ];

  constructor(
    private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roomService.getById(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.room = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateroom() {
    this.roomService.updateroom(this.id, this.room).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/viewroom']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
