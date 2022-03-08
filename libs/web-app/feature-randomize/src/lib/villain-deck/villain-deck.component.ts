import { Component, Input } from '@angular/core';
import { IVillainDeck } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-villain-deck',
  templateUrl: './villain-deck.component.html',
  styleUrls: ['./villain-deck.component.scss'],
})
export class VillainDeckComponent {
  @Input() villainDeck!: IVillainDeck;

  public isBystanders(): boolean {
    return this.villainDeck.numBystanders !== undefined;
  }

  public isSidekick(): boolean {
    return this.villainDeck.numSidekicks !== undefined;
  }

  public isAmbitions(): boolean {
    return this.villainDeck.numAmbitions !== undefined;
  }
}
