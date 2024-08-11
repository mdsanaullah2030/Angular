import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {path:'location',component:LocationComponent},
  {path:'createlocation',component:CreatelocationComponent},
  {path:'updatelocation/:id',component:UpdatelocationComponent},
  {path:'student',component:ViewstudentComponent},
  {path:'createstudent',component:CreatestudentComponent},
  {path:'updatestudent/:id',component:UpdatestudentComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
