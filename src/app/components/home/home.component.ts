import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	page: number = 1;

	loading: boolean = true;

	pokemons: any[] = [];

	totalPokemons: number = 0;

	filterPokemon: any = "";

	constructor(private pokemonService: PokemonService, private router: Router) {
		this.loading = true;
		this.getPokemonsBucle();
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}

	getPokemonsBucle() {
		let listaDePokemons: any[] = [];
		for (let i = 1; i <= 151; i++) {
			this.pokemonService.getPokemon(i).subscribe((resp: any) => {
				listaDePokemons.push(resp);
			});
			this.totalPokemons++;
		}
		this.pokemons = listaDePokemons;
	}

	verPokemon(item: any) {
		let pokemonId;
		pokemonId = item.id;
		this.router.navigate(["/pokemon", pokemonId]);
	}
}
