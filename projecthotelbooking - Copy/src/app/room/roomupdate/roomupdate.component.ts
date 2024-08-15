import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room.model';
import { RoomService } from '../../service/room.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roomupdate',
  templateUrl: './roomupdate.component.html',
  styleUrls: ['./roomupdate.component.css']
})
export class RoomupdateComponent implements OnInit {
  id: string = "";
  room: RoomModel = new RoomModel();

  roomtyp: { value: string, label: string, price: number }[] = [
    { value: 'Single Room', label: 'Single Room', price: 5000 },
    { value: 'Double Room', label: 'Double Room', price: 7000 },
    { value: 'Triple Room', label: 'Triple Room', price: 9000 },
    { value: 'Family Room', label: 'Family Room', price: 12000 },
    { value: 'Superior Room', label: 'Superior Room', price: 15000 },
    { value: 'Executive Room', label: 'Executive Room', price: 20000 },
    { value: 'Presidential Suite', label: 'Presidential Suite', price: 30000 },
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
        this.room = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

    // Listen for changes to the roomtype field and update the price accordingly
    this.route.params.subscribe(() => {
      this.updatePriceBasedOnRoomType();
    });
  }

  updatePriceBasedOnRoomType() {
    const selectedRoom = this.roomtyp.find(room => room.value === this.room.roomtype);
    if (selectedRoom) {
      this.room.price = selectedRoom.price;
    }
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
