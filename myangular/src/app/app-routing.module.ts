import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { ViewhotelComponent } from './hotel/viewhotel/viewhotel.component';
import { UpdatehotelComponent } from './hotel/updatehotel/updatehotel.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'createlocation', component: CreatelocationComponent },
  { path: 'updateLocation/:id', component: UpdatelocationComponent },
  { path: 'viewstudent', component: ViewstudentComponent },
  { path: 'createstudent', component: CreatestudentComponent },
  { path: 'updateStudent/:id', component: UpdatestudentComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path:'booking',component:ViewbookingComponent},
  {path:'create',component:CreatebookingComponent},
  {path:'hotel',component:ViewhotelComponent},
  {path:'updatehotel',component:UpdatehotelComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
