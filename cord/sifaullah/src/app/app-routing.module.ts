import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HonestComponent } from './honest/honest.component';

const routes: Routes = [
  {path:'honest',component:HonestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
