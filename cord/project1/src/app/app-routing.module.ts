import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking/booking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { RoomviewComponent } from './room/roomview/roomview.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

const routes: Routes = [
  {path:'booking',component:BookingComponent},
  {path:'create',component:CreatebookingComponent},
  {path:'updatebooking/:id',component:UpdatebookingComponent},
  {path:'user',component:ViewuserComponent},
  {path:'up',component:UpdateuserComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
