import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  public pokemonList(limit: number) {
    return this.http
                .get(AppConstants.API_ENDPOINT, { params: { limit }  });
  }

  public selectedPokemonDetails(endpoint: string) {
    
  }
}
