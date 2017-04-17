import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokeApp',
  templateUrl: './pokeApp.component.html',
  styleUrls: ['./pokeApp.component.css']
})

export class PokeAppComponent implements OnInit{

  constructor(public http: Http){}

  	private API;
  	private pokemon;
  	private idPokemon;
  	private listePokemons;
  	private listeAbilities;
  	private listeStats;

  	private urlAPI = 'https://pokeapi.co/api/v2/pokedex/1/';
  	private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  	
  	visible =false;
  	pokedexVisible = false;

  	getPokedex(){
		const headers = new Headers({'Content-Type' : 'application/json; charset=UTF-8'});
		const options = new RequestOptions({ headers: headers });

		this.http
			.get(this.urlAPI)
			.subscribe(res => this.API = res.json());

		var stop = setInterval(
			() => {

				if (this.listePokemons) {
					this.afficherPokedex();
					clearInterval(stop);
				}

				else {
					console.log("Les données ne sont pas encore chargées, merci de patienter");
					
					this.http
						.get(this.urlAPI)
						.subscribe(res => this.API = res.json());

					this.listePokemons = this.API.pokemon_entries;
				}
			}
		,1000);
	}

	afficher(){
		this.visible = true;
	}

	afficherPokedex(){
		this.pokedexVisible = true;
	}

	fiche = {
		entry_number: new FormControl("entry_number", Validators.required),
	}

	go(){
		const headers = new Headers({'Content-Type' : 'application/json; charset=UTF-8'});
		const options = new RequestOptions({ headers: headers });

		this.idPokemon = this.fiche.entry_number;
		
		this.http
			.get(this.urlPokemon+this.idPokemon)
			.subscribe(res => this.pokemon = res.json());
	
		var stop = setInterval(
			() => {
				if (this.listeAbilities) {
					this.afficher();
					clearInterval(stop);
				}		

				else {
					console.log("Les données ne sont pas encore chargées, merci de patienter");

					this.listeAbilities = this.pokemon.abilities;
					this.listeStats = this.pokemon.stats;
				}	
			}
		,2000);
	}
  ngOnInit() {}
}
