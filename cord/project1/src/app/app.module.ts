import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking/booking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import {  provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomviewComponent } from './room/roomview/roomview.component';
import { CreateroomComponent } from './room/createroom/createroom.component';
import { SearchPipe } from './search.pipe';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    UpdatebookingComponent,
    CreatebookingComponent,
    RoomviewComponent,
    CreateroomComponent,
    SearchPipe,
    ViewuserComponent,
    CreateuserComponent,
    UpdateuserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
   
    provideHttpClient(),
    provideHttpClient(
    withFetch(),

  ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
