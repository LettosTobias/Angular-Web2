import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelularesListComponent } from './celulares-list/celulares-list.component';
import { FormsModule } from '@angular/forms';
import { CelularesTandilAboutComponent } from './celulares-tandil-about/celulares-tandil-about.component';
import { CelularesTandilCelularesComponent } from './celulares-tandil-celulares/celulares-tandil-celulares.component';
import { CarritoCelularesTandilComponent } from './carrito-celulares-tandil/carrito-celulares-tandil.component';


@NgModule({
  declarations: [
    AppComponent,
    CelularesListComponent,
    CelularesTandilAboutComponent,
    CelularesTandilCelularesComponent,
    CarritoCelularesTandilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
