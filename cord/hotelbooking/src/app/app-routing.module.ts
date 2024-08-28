import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewlocationComponent } from './location/viewlocation/viewlocation.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { ViewhotelComponent } from './hotel/viewhotel/viewhotel.component';
import { CreatehotelComponent } from './hotel/createhotel/createhotel.component';
import { UpdatehotelComponent } from './hotel/updatehotel/updatehotel.component';
import { ViewroomComponent } from './room/viewroom/viewroom.component';
import { CreateroomComponent } from './room/createroom/createroom.component';
import { UpdateroomComponent } from './room/updateroom/updateroom.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { AboutComponent } from './style/about/about.component';
import { HomeComponent } from './style/home/home.component';
import { AccomodationComponent } from './style/accomodation/accomodation.component';


const routes: Routes = [
  {path:'view',component:ViewlocationComponent},
  {path:'create',component:CreatelocationComponent},
  {path:'updateLocation/:id',component:UpdatelocationComponent},
  {path:'hotelview',component:ViewhotelComponent},
  {path:'createHotel',component:CreatehotelComponent},
  {path:'updateHotel/:id',component:UpdatehotelComponent},
  {path:'roomview',component:ViewroomComponent},
  {path:'roomcreat',component:CreateroomComponent},
  {path:'updateRoom/:id',component:UpdateroomComponent},
  {path:'booking',component:ViewbookingComponent},
  {path:'creat',component:CreatebookingComponent},
  {path:'updateBooking/:id',component:UpdatebookingComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'accomodation',component:AccomodationComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

