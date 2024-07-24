import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking/booking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';

const routes: Routes = [
  {path:'booking',component:BookingComponent},
  {path:'create',component:CreatebookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
