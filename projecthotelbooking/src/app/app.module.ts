import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoomviewComponent } from './room/roomview/roomview.component';
import { RoomupdateComponent } from './room/roomupdate/roomupdate.component';
import { CreateroomComponent } from './room/createroom/createroom.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { ViewhotelComponent } from './hotelList/viewhotel/viewhotel.component';
import { CreatehotelComponent } from './hotelList/createhotel/createhotel.component';
import { UpdatehotelComponent } from './hotelList/updatehotel/updatehotel.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,

    RoomviewComponent,
    RoomupdateComponent,
    CreateroomComponent,
    ViewbookingComponent,
    UpdatebookingComponent,
   
    LoginComponent,
    RegistrationComponent,
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent,
    ViewhotelComponent,
    CreatehotelComponent,
    UpdatehotelComponent,
    NavbarComponent
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
