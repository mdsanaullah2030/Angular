import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { RoomviewComponent } from './room/roomview/roomview.component';
import { CreateroomComponent } from './room/createroom/createroom.component';
import { RoomupdateComponent } from './room/roomupdate/roomupdate.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { ViewhotelComponent } from './hotelList/viewhotel/viewhotel.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';

const routes: Routes = [
  {path:'view',component:ViewuserComponent},
  {path:'create',component:CreateuserComponent},
  {path:'update/:id',component:UpdateuserComponent},
  {path:'viewroom',component:RoomviewComponent},
  {path:'createroom',component:CreateroomComponent},
  {path:'updateroom/:id',component:RoomupdateComponent},
  {path:'bookingview',component:ViewbookingComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'location',component:LocationComponent},
  {path:'createlocation',component:CreatelocationComponent},
  {path:'updatelocation/:id',component:UpdatelocationComponent},
  {path:'hotel',component:ViewhotelComponent},
  {path:'bookingc',component:CreatebookingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


