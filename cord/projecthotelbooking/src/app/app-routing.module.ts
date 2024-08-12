import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { RoomviewComponent } from './room/roomview/roomview.component';
import { CreateroomComponent } from './room/createroom/createroom.component';
import { RoomupdateComponent } from './room/roomupdate/roomupdate.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';

const routes: Routes = [
  {path:'view',component:ViewuserComponent},
  {path:'create',component:CreateuserComponent},
  {path:'update/:id',component:UpdateuserComponent},
  {path:'viewroom',component:RoomviewComponent},
  {path:'createroom',component:CreateroomComponent},
  {path:'updateroom/:id',component:RoomupdateComponent},
  {path:'bookingview',component:ViewbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


