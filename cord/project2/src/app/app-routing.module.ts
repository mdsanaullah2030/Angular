import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';

const routes: Routes = [
  {path:'user',component:ViewuserComponent},
  {path:'cre',component:CreateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
