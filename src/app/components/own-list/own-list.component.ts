import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from '../../model';

import { NavigationService } from '../../services/navigation.service';
import { OwnListService } from '../../services/own-list.service';

@Component({
  selector: 'own-list',
  templateUrl: './own-list.component.html',
  styleUrls: ['./own-list.component.scss']
})
export class OwnListComponent implements OnInit {
  @Input() pokemons: IPokemon[];

  constructor(private navigationService: NavigationService,
              private ownListService: OwnListService) { }

  ngOnInit() {
    this.ownListService.currentList.subscribe(list => this.pokemons = list);
  }

  goBack() {
    this.navigationService.navigate(['']);
  }

}
