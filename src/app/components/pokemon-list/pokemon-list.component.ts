import { Component, OnInit } from '@angular/core';

import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi.pokemonList(0).subscribe(data => {
      console.log(data)
    });
  }

}
