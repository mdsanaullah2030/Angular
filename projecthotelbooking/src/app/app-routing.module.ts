import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [

  {path:'viewroom',component:RoomviewComponent},
  {path:'createroom',component:CreateroomComponent},
  {path:'updateroom/:id',component:RoomupdateComponent},
  {path:'bookingview',component:ViewbookingComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'location',component:LocationComponent},
  {path:'createlocation',component:CreatelocationComponent},
  {path:'updatelocation/:id',component:UpdatelocationComponent},
  {path:'hotel',component:ViewhotelComponent}
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


