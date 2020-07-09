import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemeComponent } from './scheme/scheme.component';
import { MastermindComponent } from './mastermind/mastermind.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  declarations: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent,
    HeroesComponent
  ],
  exports: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent,
    HeroesComponent
  ],
})
export class LegendizerUiModule {}
