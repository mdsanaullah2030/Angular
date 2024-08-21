import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewlocationComponent } from './location/viewlocation/viewlocation.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { ViewhotelComponent } from './hotel/viewhotel/viewhotel.component';
import { CreatehotelComponent } from './hotel/createhotel/createhotel.component';

const routes: Routes = [
  {path:'view',component:ViewlocationComponent},
  {path:'create',component:CreatelocationComponent},
  {path:'updateLocation/:id',component:UpdatelocationComponent},
  {path:'hotelview',component:ViewhotelComponent},
  {path:'createHotel',component:CreatehotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }