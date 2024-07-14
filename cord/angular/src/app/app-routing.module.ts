import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { CretelocationComponent } from './cretelocation/cretelocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';

const routes: Routes = [
 
  {path:'location',component:LocationComponent},
  {path:'cretelocation',component:CretelocationComponent},
  {path: 'updatelocation/:id', component:UpdatelocationComponent},
  {path:'student',component:ViewstudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
