import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servic/auth.service';
import { Router } from '@angular/router';

import { UserModel } from '../location/model/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  regForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    })



  }

  onSubmit(): void {

    if (this.regForm.valid) {
      const user: UserModel = this.regForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
    else {
      alert("Complte mandatory Field");
    }
  }

}
