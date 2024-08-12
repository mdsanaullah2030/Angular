import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../model/room.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit {
  room: RoomModel = new RoomModel();
  formValue!: FormGroup;
  roomData: any;

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
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      roomid: [''],
      roomnumber: [''],
      roomtype: ['', Validators.required],
      price: [''],
      status: ['', Validators.required],
      description: ['']
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
