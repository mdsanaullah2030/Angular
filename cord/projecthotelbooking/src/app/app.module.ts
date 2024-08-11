import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewuserComponent,
    CreateuserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   
    provideHttpClient(
      withFetch(),
  
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
