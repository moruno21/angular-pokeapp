import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasterEggComponent } from './components/easter-egg/easter-egg.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'moodle', component: EasterEggComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
