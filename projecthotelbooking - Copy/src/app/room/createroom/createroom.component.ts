import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit {
  room: RoomModel = new RoomModel();
  formValue!: FormGroup;

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      roomid: [''],
      roomnumber: [''],
      roomtype: ['', Validators.required],
      price: [{ value: '', disabled: true }, Validators.required],
      status: ['', Validators.required],
      description: ['']
    });

    // Listen for changes to the roomtype field
    this.formValue.get('roomtype')?.valueChanges.subscribe((selectedRoomType) => {
      const selectedRoom = this.roomtyp.find(room => room.value === selectedRoomType);
      if (selectedRoom) {
        this.formValue.patchValue({
          price: selectedRoom.price
        });
      }
    });
  }

  createroom() {
    this.room.roomid = this.formValue.value.roomid;
    this.room.roomnumber = this.formValue.value.roomnumber;
    this.room.roomtype = this.formValue.value.roomtype;
    this.room.price = this.formValue.value.price;
    this.room.status = this.formValue.value.status;
    this.room.description = this.formValue.value.description;

    this.roomService.createroom(this.room).subscribe({
      next: (res) => {
        console.log(res);
        this.formValue.reset();
        this.router.navigate(['/viewroom']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
