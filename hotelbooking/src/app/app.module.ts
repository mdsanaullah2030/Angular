import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewlocationComponent } from './location/viewlocation/viewlocation.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewhotelComponent } from './hotel/viewhotel/viewhotel.component';
import { CreatehotelComponent } from './hotel/createhotel/createhotel.component';
import { UpdatehotelComponent } from './hotel/updatehotel/updatehotel.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewlocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent,
    ViewhotelComponent,
    CreatehotelComponent,
    UpdatehotelComponent
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
