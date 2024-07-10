import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NusraatComponent } from './nusraat/nusraat.component';
import { LocationComponent } from './location/location.component';
import { CretelocationComponent } from './cretelocation/cretelocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';

@NgModule({
  declarations: [
    AppComponent,
    NusraatComponent,
    LocationComponent,
    CretelocationComponent,
    UpdatelocationComponent
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
