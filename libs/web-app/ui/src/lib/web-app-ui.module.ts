import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemeComponent } from './scheme/scheme.component';
import { MastermindComponent } from './mastermind/mastermind.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdditionalCardsComponent } from './additional-cards/additional-cards.component';
import { HenchmenComponent } from './henchmen/henchmen.component';
import { VillainGroupComponent } from './villain-group/villain-group.component';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
  ],
})
export class WebAppUiModule {}
