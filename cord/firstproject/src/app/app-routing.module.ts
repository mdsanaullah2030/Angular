import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanaullahComponent } from './sanaullah/sanaullah.component';

const routes: Routes = [
  {path:'sanaullah',component:SanaullahComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
