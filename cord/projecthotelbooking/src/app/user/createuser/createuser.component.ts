import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit{
user:UserModel=new UserModel();
fromValue!:FormGroup;
userData:any;

constructor(
  private userService:UserService,
  private router:Router,
  private httpClicent:HttpClient,
  private formBulder:FormBuilder,
){
  
}

  ngOnInit(): void {
    this.fromValue = this.formBulder.group({


      name: [''],
      email: [''],
      password: [''],
      phonenumber: [''],


    });


 
  }
  createUser() {
    this.user.name = this.fromValue.value.name;

    this.user.email = this.fromValue.value.email;

    this.user.password = this.fromValue.value.password;

    this.user.phonenumber = this.fromValue.value.phonenumber;

   this.userService.createUser(this.user)
   .subscribe({
    next: res => {
      console.log(res);
      this.fromValue.reset();
      this.router.navigate(['/view']);
    },
    error: error => {
      console.log(error);
    }
  })


  }

}
