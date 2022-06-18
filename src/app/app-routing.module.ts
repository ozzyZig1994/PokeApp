import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon/:pokemon', component : PokemonDetailsComponent },
  { path: '', redirectTo: 'pokemon-list', pathMatch:'full' },
  { path: '**', redirectTo: '/pokemon-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
