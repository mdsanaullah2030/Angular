import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent implements OnInit{
users:any;
constructor(
  private userService:UserService,
  private router:Router,
  private httpClient:HttpClient
){

}

  ngOnInit(): void {
   this.users=this.userService.getAlluser();
  }

}
