import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HenchmenComponent } from './henchmen/henchmen.component';
import { AdditionalCardsComponent } from './additional-cards/additional-cards.component';
import { VillainGroupComponent } from './villain-group/villain-group.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    HenchmenComponent,
    AdditionalCardsComponent,
    VillainGroupComponent,
  ],
  exports: [HenchmenComponent, AdditionalCardsComponent, VillainGroupComponent],
})
export class LegendizerUiVillainDeckModule {}
