import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NusraatComponent } from './nusraat/nusraat.component';
import { LocationComponent } from './location/location.component';
import { CretelocationComponent } from './cretelocation/cretelocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';

const routes: Routes = [
  {path:'nusrat',component:NusraatComponent},
  {path:'location',component:LocationComponent},
  {path:'cretelocation',component:CretelocationComponent},
  {path: 'updatelocation/:id', component:UpdatelocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
