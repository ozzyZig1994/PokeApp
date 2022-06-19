import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { ArcadeScreenComponent } from './arcade-screen/arcade-screen.component';


@NgModule({
  declarations: [
    ArcadeScreenComponent
  ],
  exports: [
    ArcadeScreenComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
