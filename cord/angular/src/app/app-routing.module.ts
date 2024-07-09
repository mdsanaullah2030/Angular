import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NusraatComponent } from './nusraat/nusraat.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'nusrat',component:NusraatComponent},
  {path:'location',component:LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
