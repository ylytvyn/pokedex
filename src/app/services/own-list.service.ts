import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IPokemon } from '../model';

@Injectable({
  providedIn: 'root'
})
export class OwnListService {

  private pokemonListSource = new BehaviorSubject([]);
  currentList = this.pokemonListSource.asObservable();

  constructor() { }

  changePokemonList(list: IPokemon[]): void {
    this.pokemonListSource.next(list);
  }
}
