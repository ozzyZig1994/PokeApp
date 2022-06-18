import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  public pokemonList(offset: number) {
    const limit = AppConstants.POKEMEN_PAGE_LIMIT;
    return this.http.get(AppConstants.API_ENDPOINT, { params: { limit, offset }  });
  }

  public selectedPokemonDetails(endpoint: string) {
    
  }
}
