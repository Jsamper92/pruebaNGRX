import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';
import { environment } from 'src/environments/environment';
import { ContadorHijoComponent } from './contador-hijo/contador-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( {contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Esta linea dice que maneje al programa como mucho 25 acciones
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
