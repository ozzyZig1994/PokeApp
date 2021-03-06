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
    this.pokeApi.pokemonList(1126).subscribe((data: any) => {
      this.pokemonList = data.results;
    });
  }

}
