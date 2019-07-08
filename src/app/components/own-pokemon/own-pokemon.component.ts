import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPokemon } from '../../model';
import { PokemonsService } from '../../services/pokemons.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-own-pokemon',
  templateUrl: './own-pokemon.component.html',
  styleUrls: ['./own-pokemon.component.scss']
})
export class OwnPokemonComponent implements OnInit {

  pokemon: IPokemon;

  constructor(private pokemonsService: PokemonsService,
              private navigationService: NavigationService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let pokemonId = this.activeRoute.snapshot.params.id;

    this.pokemon = this.pokemonsService.getPokemon(+pokemonId);
  }

  goBackLink(): void {
    this.navigationService.navigate(['']);
  }

}
