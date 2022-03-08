import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BadguyCardContentComponent } from './badguy-card-content/badguy-card-content.component';
import { BaseCardContentComponent } from './base-card-content/base-card-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HenchmenCardContentComponent } from './henchmen-card-content/henchmen-card-content.component';
import { HeroCardContentComponent } from './hero-card-content/hero-card-content.component';
import { MastermindCardContentComponent } from './mastermind-card-content/mastermind-card-content.component';
import { VillaingroupCardContentComponent } from './villaingroup-card-content/villaingroup-card-content.component';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule, NgbModule],
  declarations: [
    HeaderComponent,
    MastermindCardContentComponent,
    FooterComponent,
    HeroCardContentComponent,
    BaseCardContentComponent,
    HenchmenCardContentComponent,
    VillaingroupCardContentComponent,
    BadguyCardContentComponent,
  ],
  exports: [
    HeaderComponent,
    MastermindCardContentComponent,
    FooterComponent,
    HeroCardContentComponent,
    BaseCardContentComponent,
    HenchmenCardContentComponent,
    VillaingroupCardContentComponent,
    BadguyCardContentComponent,
  ],
})
export class WebAppUiModule {}
