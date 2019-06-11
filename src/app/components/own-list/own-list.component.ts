import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from '../../model';

@Component({
  selector: 'own-list',
  templateUrl: './own-list.component.html',
  styleUrls: ['./own-list.component.scss']
})
export class OwnListComponent implements OnInit {
  @Input() pokemons: IPokemon[];

  constructor() { }

  ngOnInit() {
  }

}
