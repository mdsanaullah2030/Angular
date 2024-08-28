import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../servic/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder
  ){
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    });


  }
  
  onSubmit():void{
    if(this.loginForm.valid){
      const  credentials=this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next:(res)=>{
          console.log('User logged in successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/']);

        },
        error:(error)=>{
          console.error('Error logging in:',error);
        }
      })
    }

    

  }

}
