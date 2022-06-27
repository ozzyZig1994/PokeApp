import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemonName: string = '';
  public pokemonImage: string = '';
  public pokemonAbilities: any = [];

  constructor(private route: ActivatedRoute, private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonName = params['pokemon'];
      this.pokeApi.selectedPokemonDetails(params['pokemon']).subscribe((data: any) => {
        this.pokemonImage = data.sprites.front_default;
        this.pokemonAbilities = data.abilities;
      });
    });
  }

}
