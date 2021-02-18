import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient) { }

  baseUrl = 'https://pokeapi.co/api/v2';

  getPokemons(){
    return this.http.get(`${this.baseUrl}/pokemon/`);
  }
  
  
  getPokemon(index: number){
    return this.http.get(`${this.baseUrl}/pokemon/${index}`)
  }

  getPokemonArea(index: number){
    return this.http.get(`${this.baseUrl}/pokemon/${index}/encounters`);
  }

}
