import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPokemon } from '../../model';
import { MessagesService } from '../../services/messages.service';
import { PokemonsService } from '../../services/pokemons.service';
import { OwnListService } from '../../services/own-list.service';
import { ModalType } from '../../model';


@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {

  pokemons: IPokemon[];
  filteredPokemons: IPokemon[];
  selectedPokemon: IPokemon;
  catchedPokemons: IPokemon[] = [];
  pokemonTypes: any = [];

  constructor(private _snackBar: MatSnackBar,
              private messagesService: MessagesService,
              private pokemonsService: PokemonsService,
              private ownListService: OwnListService) { }

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemonsList();
    this.filteredPokemons = this.pokemons;
    this.ownListService.currentList.subscribe(list => this.catchedPokemons = list);
    this.collectPokemonTypes();
  }

  collectPokemonTypes(): void {
    this.pokemons.forEach((item: IPokemon) => {
      let types = item.type;

      types.forEach((i) => {
        let item = this.pokemonTypes.find(x => x === i);

        if (!item) {
          this.pokemonTypes.push(i);
        }
      });

    });
  }

  filterPokemonsByType(searchString: string): void {
    let filteredByType = [];

    this.pokemons.forEach((item: IPokemon) => {
      item.type.forEach((type) => {
        let findedType = this.pokemonTypes.find(x => x.toLowerCase() === searchString.toLowerCase());

        if (findedType == type) {
          filteredByType.push(item);
        }
      });
    });

    this.filteredPokemons = filteredByType;
  }

  // Show Details on click
  showDetails(pokemon: IPokemon): void {
    this.selectedPokemon = pokemon;
    this.deleteSelectedClass();
    pokemon.isSelected = true;
  }

  // Delete Selected Class
  deleteSelectedClass(): void {
    this.pokemons.forEach((item: IPokemon) => {
      delete item.isSelected;
    });
  }

  // Hide pokemon on close
  onClose(): void {
    this.selectedPokemon = null;
    this.deleteSelectedClass();
  }

  // Catch pokemon
  onCatch(pokemon: IPokemon): void {
    let chanceToCatch = Math.floor(Math.random() * 101);

    if (chanceToCatch >= 50) {
      this._snackBar.open('You catched pokemon!', 'X', {
        duration: 5000
      });

      this.catchedPokemons.push(pokemon);
      this.ownListService.changePokemonList(this.catchedPokemons);

      this.pokemons.splice(this.pokemons.findIndex((i) => {
        return i.id === pokemon.id;
      }), 1);

      this.selectedPokemon = null;
    } else {
      let message = `Not today :(. Your chance to catch pokemon is ${chanceToCatch}%`;

      this.messagesService.openModal(message, ModalType.Confirm, true);
    }
  }

}
