import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking/booking.component';

import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { ViewfulfilComponent } from './fulfil/viewfulfil/viewfulfil.component';

const routes: Routes = [
{path:'booking',component:BookingComponent},
{path:'createbooking',component:CreatebookingComponent},
{path:'updatebooking/:id',component:UpdatebookingComponent},
{path:'fulfil',component:ViewfulfilComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
