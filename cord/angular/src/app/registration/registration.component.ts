import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servic/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  regForm!:FormGroup;

  constructor(
private authService:AuthService,
private router:Router,
private formBuilder:FormBuilder

  ){
this.regForm=this.formBuilder.group({
  //validators.requird registration kora somay name,email faka rakha jabe na//
name:['',Validators.required],
email:['',[Validators.required,Validators.email]],
password:['',Validators.required]

})


  }
  onSubmit(): void {
   
    if (this.regForm.valid) {
     
      const user: UserModel = this.regForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/']); // Navigate to a protected route after registration
          //navigate[/] url niye jabe success hole//
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
    else{
      //masses dibe//
      alert("Complte mandatory Field");
    }
  }


}