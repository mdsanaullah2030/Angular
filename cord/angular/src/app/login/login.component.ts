import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../servic/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      //variabul credentials loginForm value thakbe //
      const credentials = this.loginForm.value;
      //authService login pase credentials madhome mail, password pathabe//
      this.authService.login(credentials).subscribe({
        next: (res) => {
          console.log('User logged in successfully:', res);
          this.authService.storeToken(res.token);
          // this.router.navigate['/'];
          // this.router.navigate(['/']); // Navigate to a protected route after login
        },
        error: (err) => {
          console.error('Error logging in:', err);
        }
      });
    }
  }


}
