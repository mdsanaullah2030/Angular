import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanaullahComponent } from './sanaullah/sanaullah.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';

const routes: Routes = [
  {path:'sanaullah',component:SanaullahComponent},
  {path:'location',component:LocationComponent},
  {path:'createlocation',component:CreatelocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
