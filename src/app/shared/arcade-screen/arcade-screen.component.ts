import { Component, Input, OnInit } from '@angular/core';

import * as Content from '../../../assets/content.json';

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

  public contentData: any;

  constructor() { this.contentData = Content }

  ngOnInit(): void {
  }

}
