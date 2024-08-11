import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { ViewhotelComponent } from './hotel/viewhotel/viewhotel.component';
import { CreatehotelComponent } from './hotel/createhotel/createhotel.component';
import { UpdatehotelComponent } from './hotel/updatehotel/updatehotel.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent,
    ViewstudentComponent,
    CreatestudentComponent,
    UpdatestudentComponent,
    RegistrationComponent,
    LoginComponent,
    ViewbookingComponent,
    UpdatebookingComponent,
    CreatebookingComponent,
    ViewhotelComponent,
    CreatehotelComponent,
    UpdatehotelComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
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
