import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnPokemonComponent } from '../components/own-pokemon/own-pokemon.component';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';
import { OwnListComponent } from '../components/own-list/own-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:id',
    component: OwnPokemonComponent
  },
  {
    path: 'own-list',
    component: OwnListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
