import { IMAGE_CONFIG } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit{
id:string="";
user:UserModel=new UserModel();


  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.user=new UserModel();
    this.id=this.route.snapshot.params['id'];
    this.userService.getById(this.id)
    .subscribe({
      next:res=>{
        this.user=res;
        console.log(res);
      },
      error: err => {
        console.log(err);

      }

    });
  }
  updateUser(){
this.userService.updateUser(this.id,this.user)
.subscribe({
  next:res=>{
    this.router.navigate(['view']);
  },
  error: err => {
    console.log(err);
  }
  
})


}
}
