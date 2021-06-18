import { Component, Input, OnInit } from '@angular/core';

import {
  CardType,
  ICard,
  IDeck,
  IVillainDeck,
} from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-iterate-deck',
  templateUrl: './iterate-deck.component.html',
  styleUrls: ['./iterate-deck.component.scss'],
})
export class IterateDeckComponent implements OnInit {
  @Input() deckName = '';
  @Input() deck!: IDeck;

  deckUnderscore = '';

  CardType = CardType;

  constructor() {}

  ngOnInit(): void {
    this.deckUnderscore = this.deckName.split(' ').join('_');
  }

  public isCardType(card: ICard, type: CardType): boolean {
    if (card.cardType === type) return true;
    else return false;
  }

  public isSetupCards(): boolean {
    const setupCards = [
      this.deck.numBystanders,
      this.deck.numWounds,
      this.deck.numTwists,
      (this.deck as IVillainDeck).numAmbitions,
      (this.deck as IVillainDeck).numShieldOfficers,
      (this.deck as IVillainDeck).numSidekicks,
    ];
    if (setupCards.some((item) => item !== undefined)) return true;
    else return false;
  }
}
