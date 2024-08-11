import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking/booking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import {  provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    UpdatebookingComponent,
    CreatebookingComponent,
   
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
