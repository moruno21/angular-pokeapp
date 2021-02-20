import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	loading: boolean = true;

	pokemons: any[] = [];

	filterPokemon: any = "";

	constructor(private pokemonService: PokemonService, private router: Router) {
		this.loading = true;
		this.getPokemonsBucle();
		// setTimeout(() => {
		this.loading = false;
		// }, 1000);
	}

	getPokemonsBucle() {
		let listaDePokemons: any[] = [];
		for (let i = 1; i < 150; i++) {
			//Hay que hacer este if ya que el pokemon con id 288 no esta bien en la
			if (i === 127) {
			} else {
				this.pokemonService.getPokemon(i).subscribe((resp: any) => {
					listaDePokemons.push(resp);
				});
			}
		}
		this.pokemons = listaDePokemons;
	}

	getPokemonsSinBucle() {
		this.pokemonService.getPokemons().subscribe((resp: any) => {
			this.pokemons.push(resp);
			console.log(this.pokemons);
		});
	}

	verPokemon(item: any) {
		let pokemonId;
		pokemonId = item.id;
		this.router.navigate(["/pokemon", pokemonId]);
	}
}
