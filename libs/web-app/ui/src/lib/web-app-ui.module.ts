import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdditionalCardsComponent } from './additional-cards/additional-cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HenchmenComponent } from './henchmen/henchmen.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MastermindComponent } from './mastermind/mastermind.component';
import { SchemeComponent } from './scheme/scheme.component';
import { VillainGroupComponent } from './villain-group/villain-group.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    FontAwesomeModule,
    NgbModule,
  ],
  declarations: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent,
    HeroesComponent,
    AdditionalCardsComponent,
    HenchmenComponent,
    VillainGroupComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent,
    HeroesComponent,
    AdditionalCardsComponent,
    HenchmenComponent,
    VillainGroupComponent,
    FooterComponent,
  ],
})
export class WebAppUiModule {}
