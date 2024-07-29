import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roomview',
  templateUrl: './roomview.component.html',
  styleUrl: './roomview.component.css'
})
export class RoomviewComponent implements OnInit{

  rooms:any;

  constructor(
    private roomService:RoomService,
    private router:Router,
    private httpClient:HttpClient
  ){
    
  }
  ngOnInit(): void {
    this.rooms = this.roomService.getAllRoom();
  }

  deleteroom(id: string) {
    this.roomService.deleteroom(id)
      .subscribe({
        next: res => {
          this.rooms = this.roomService.getAllRoom();
          this.router.navigate(['viewroom']);
        },
        error: error => {
          console.log(error);

        }

      });

}
updateroom(id:string){
  this.router.navigate(['/updateroom',id])
}
}
