import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { StudentComponent } from './student/student.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { CommonModule } from '@angular/common';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { RegistrationComponent } from './registration/registration.component';

import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent,
    UpdatestudentComponent,
    StudentComponent,
    CreatestudentComponent,
    ViewstudentComponent,
    RegistrationComponent,
   
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
