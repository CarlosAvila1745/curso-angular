import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { OtroComponent } from './otro/otro.component';
import { ListadoComponent } from './listado/listado.component';

import { listaReducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    OtroComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ lista: listaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
