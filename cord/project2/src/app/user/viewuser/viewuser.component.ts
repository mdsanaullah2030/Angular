
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../../model/user.model';



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

 deleteUserser(userid:string){
    this.users=this.userService.deleteUser(userid)
    .subscribe({
      next:res=>{
        this.users=this.userService.getAlluser();
        // this.router.navigate(['/user'])

      },
      error: error => {
        console.log(error);
    
      }
   
      
    })


  }
  updateUser(id:string){
    this.router.navigate(['updateuse',id]);
  }

}
