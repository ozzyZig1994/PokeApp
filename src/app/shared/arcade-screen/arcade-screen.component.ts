import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'arcade-screen',
  templateUrl: './arcade-screen.component.html',
  styleUrls: ['./arcade-screen.component.scss']
})
export class ArcadeScreenComponent implements OnInit {
  @Input('pokemonList') pokemonList: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
