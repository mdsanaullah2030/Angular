import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './java/java.component';

const routes: Routes = [
  {path:'java',component:JavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
