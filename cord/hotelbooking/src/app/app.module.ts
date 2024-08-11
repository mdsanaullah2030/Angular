import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking/booking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { UpdatebookingComponent } from './booking/updatebooking/updatebooking.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
// import { FulfilComponent } from './fulfil/fulfil/fulfil.component';
import { ViewfulfilComponent } from './fulfil/viewfulfil/viewfulfil.component';
import { UpdatefulfilComponent } from './fulfil/updatefulfil/updatefulfil.component';
import { CreatefulfilComponent } from './fulfil/createfulfil/createfulfil.component';





@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CreatebookingComponent,
    UpdatebookingComponent,
    // FulfilComponent,

  
    ViewfulfilComponent,
    UpdatefulfilComponent,
    CreatefulfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [
    
    provideHttpClient(
      withFetch()
      
    )
      
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
