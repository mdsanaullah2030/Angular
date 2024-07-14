import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { SanaullahComponent } from './sanaullah/sanaullah.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { CreatelocationvComponent } from './createlocationv/createlocationv.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    SanaullahComponent,
    CreatelocationComponent,
    CreatelocationvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
