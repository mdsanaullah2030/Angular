import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NusraatComponent } from './nusraat/nusraat.component';

const routes: Routes = [
  {path:'nusrat',component:NusraatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
