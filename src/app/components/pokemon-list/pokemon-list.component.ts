import { Component, OnInit } from '@angular/core';

import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: any;

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi.pokemonList(5).subscribe((data: any) => {
      console.log(data.results);
      this.pokemonList = data.results;
    });
  }

  public selectedPokemon(pokemonName: string): void {
    console.log(pokemonName);
  }

}
