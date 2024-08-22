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

const routes: Routes = [
  {path:'view',component:ViewlocationComponent},
  {path:'create',component:CreatelocationComponent},
  {path:'updateLocation/:id',component:UpdatelocationComponent},
  {path:'hotelview',component:ViewhotelComponent},
  {path:'createHotel',component:CreatehotelComponent},
  {path:'updateHotel/:id',component:UpdatehotelComponent},
  {path:'roomview',component:ViewroomComponent},
  {path:'roomcreat',component:CreateroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

