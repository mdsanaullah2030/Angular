import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { CretelocationComponent } from './cretelocation/cretelocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdateComponent } from './student/update/update.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  {path:'location',component:LocationComponent},
  {path:'cretelocation',component:CretelocationComponent},
  {path:'updatelocation/:id',component:UpdatelocationComponent},
  {path:'student',component:ViewstudentComponent},
  {path:'createstudent',component:CreatestudentComponent},
  {path:'updatestudent/:id',component:UpdateComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'log',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
