import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RandomizeComponent } from './randomize/randomize.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameSetSelectComponent } from './game-set-select/game-set-select.component';
import { IterateDeckComponent } from './iterate-deck/iterate-deck.component';
import { SchemeMastermindSelectComponent } from './scheme-mastermind-select/scheme-mastermind-select.component';
import { ReplacePipe } from './replace.pipe';
import { UiFooterComponent } from './ui-footer/ui-footer.component';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiHenchmenComponent } from './ui-henchmen/ui-henchmen.component';
import { UiHeroesComponent } from './ui-heroes/ui-heroes.component';
import { UiMastermindComponent } from './ui-mastermind/ui-mastermind.component';
import { UiVillainGroupComponent } from './ui-villain-group/ui-villain-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GameSetSelectComponent,
    IterateDeckComponent,
    RandomizeComponent,
    SchemeMastermindSelectComponent,
    ReplacePipe,
    UiFooterComponent,
    UiHeaderComponent,
    UiHenchmenComponent,
    UiHeroesComponent,
    UiMastermindComponent,
    UiVillainGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbAccordionModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
