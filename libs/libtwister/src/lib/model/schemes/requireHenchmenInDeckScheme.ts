import { MultiCardStore, StoreOfStores } from '../../factories';
import { Henchmen } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../interfaces';
import { DECK_TYPE, NumPlayers } from '../types';

import { Scheme } from './Scheme';
import { AbstractCardInDeckScheme } from './abstractCardInDeckScheme';

export class RequireHenchmenInDeckScheme extends AbstractCardInDeckScheme<Henchmen> {
  protected createDeck(
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {},
    card: Henchmen,
    numPlayers: NumPlayers
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numHenchmen: number | undefined;

    const rules = this.rules[numPlayers];
    if (
      this.deck === DECK_TYPE.HERO &&
      rules.heroDeck.numHenchmenGroups !== undefined
    ) {
      numHenchmen = rules.heroDeck.numHenchmenGroups;
    } else if (
      this.deck === DECK_TYPE.ADDITIONAL &&
      rules.additionalDeck?.deck?.numHenchmenGroups !== undefined
    ) {
      numHenchmen = rules.additionalDeck?.deck?.numHenchmenGroups;
    } else {
      numHenchmen = rules.villainDeck.numHenchmenGroups;
    }

    deck.henchmen = Scheme.addToDeck(deck.henchmen ?? [], card, numHenchmen);

    return deck;
  }

  protected getStore(storeOfStores: StoreOfStores): MultiCardStore<Henchmen> {
    return storeOfStores.henchmenStore;
  }
}
