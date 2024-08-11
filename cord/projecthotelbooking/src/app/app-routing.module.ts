import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

const routes: Routes = [
  {path:'view',component:ViewuserComponent},
  {path:'create',component:CreateuserComponent},
  {path:'update/:id',component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
