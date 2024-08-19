import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent implements OnInit {
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
  deleteUser(id:string){
this.userService.deleteUser(id)
.subscribe({
next:res=>{
  this.users=this.userService.getAlluser();
  this.router.navigate(['view']);
},
  
error: error => {
  console.log(error);

}
});

}
updateUser(id:string){
  this.router.navigate(['update',id])
}

createuser(){
  this.router.navigate(['create'])

}
}
