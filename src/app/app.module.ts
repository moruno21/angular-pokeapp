import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FilterPipe } from './pipes/filter.pipe';

import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { EspacioGuionPipe } from './pipes/espacio-guion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokemonComponent,
    FilterPipe,
    LoadingComponent,
    UppercasePipe,
    EspacioGuionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

