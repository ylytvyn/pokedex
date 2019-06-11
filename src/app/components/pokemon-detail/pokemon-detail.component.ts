import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../model';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @Output() onClose = new EventEmitter();
  @Output() onCatch = new EventEmitter<IPokemon>();

  constructor() { }

  ngOnInit() {
  }

  hideDetailedView(): void {
    this.onClose.emit();
  }

  catchPokemon(pokemon: IPokemon): void {
    this.onCatch.emit(pokemon);
  }

}
