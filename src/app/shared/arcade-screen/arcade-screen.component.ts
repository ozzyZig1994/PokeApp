import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arcade-screen',
  templateUrl: './arcade-screen.component.html',
  styleUrls: ['./arcade-screen.component.scss']
})
export class ArcadeScreenComponent implements OnInit {
  @Input('pokemonList') pokemonList: any;
  @Input('pokemonName') pokemonName: string = '';
  @Input('pokemonImage') pokemonImage: string = '';
  @Input('pokemonAbilities') pokemonAbilities: any = [];


  constructor() { }

  ngOnInit(): void {
  }

}
