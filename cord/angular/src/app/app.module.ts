import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LocationComponent } from './location/location.component';
import { CretelocationComponent } from './cretelocation/cretelocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { StudentComponent } from './student/student.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { UpdateComponent } from './student/update/update.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
  
    LocationComponent,
    CretelocationComponent,
    UpdatelocationComponent,
    CreatestudentComponent,
    StudentComponent,
    ViewstudentComponent,
    UpdateComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
    // provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    // provideClientHydration()
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
