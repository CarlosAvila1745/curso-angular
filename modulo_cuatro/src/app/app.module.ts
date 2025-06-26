import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { trackingReducer } from './store/tracking.reducer';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AnimadoComponent } from './animado/animado.component';
import { ClickTrackerDirective } from './directives/click-tracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AnimadoComponent,
    ClickTrackerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'TU_MAPBOX_ACCESS_TOKEN_AQUI'
    }),
    StoreModule.forRoot({ tracking: trackingReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
