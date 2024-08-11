import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../model/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit {
  user: UserModel = new UserModel();
  formValue!: FormGroup;
  useringData: any;

  constructor(
    private userngService: UserService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({


      name: [''],
      email: [''],
      password: [''],
      phonenumber: [''],


    });
  }
  createUser() {
    this.user.name = this.formValue.value.name;

    this.user.email = this.formValue.value.email;

    this.user.password = this.formValue.value.password;

    this.user.phonenumber = this.formValue.value.phonenumber;

    this.userngService.createUser(this.user)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/user']);
        },
        error: error => {
          console.log(error);
        }
      })

  }

}

