import { Injectable } from '@angular/core';

import { POKEMONS } from '../mock-pokemons';
import { IPokemon } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons: IPokemon[] = POKEMONS;

  constructor() { }

  getPokemonsList(): IPokemon[] {
    return this.pokemons;
  }
}
