import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HenchmenComponent } from './henchmen/henchmen.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MastermindComponent } from './mastermind/mastermind.component';
import { VillainGroupComponent } from './villain-group/villain-group.component';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule, NgbModule],
  declarations: [
    HeaderComponent,
    MastermindComponent,
    HeroesComponent,
    HenchmenComponent,
    VillainGroupComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    MastermindComponent,
    HeroesComponent,
    HenchmenComponent,
    VillainGroupComponent,
    FooterComponent,
  ],
})
export class WebAppUiModule {}
