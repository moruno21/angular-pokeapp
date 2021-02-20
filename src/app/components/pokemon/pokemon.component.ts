import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
	selector: "app-pokemon",
	templateUrl: "./pokemon.component.html",
	styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
	ngOnInit(): void {}

	pokemon: any; // This stores the pokemon with all its atributes
	imagefront: any; // This stores the front image
	imageback: any; // This stores the back image
	name: any; // This stores the name of the pokemon
	types: any; // This stores the type (or types) of the pokemon
	abilities: any; // This stores the abilities of the pokemon

	loading: any;

	area: any[] = [];

	constructor(private router: ActivatedRoute, private pokemonService: PokemonService) {
		this.router.params.subscribe((params) => {
			this.loading = true;
			this.getPokemon(params["id"]);
			this.getPokemonArea(params["id"]);
			// setTimeout(() => {
			this.loading = false;
			// }, 1000);
		});
	}

	getPokemon(id: number) {
		this.pokemonService.getPokemon(id).subscribe((pokemon: any) => {
			console.log(pokemon);
			this.name = pokemon.name;
			this.pokemon = pokemon;
			this.imagefront = pokemon.sprites.front_default;
			this.imageback = pokemon.sprites.back_default;
			this.types = pokemon.types;
			this.abilities = pokemon.abilities;
		});
	}

	getPokemonArea(id: number) {
		this.pokemonService.getPokemonArea(id).subscribe((data: any) => {
			for (let i = 0; i < data.length; i++) {
				if (i >= 10) {
				} else {
					this.area.push(data[i].location_area.name);
				}
			}
			console.log(this.area);
		});
	}
}
