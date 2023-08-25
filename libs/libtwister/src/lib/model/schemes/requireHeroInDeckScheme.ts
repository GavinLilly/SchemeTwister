import { StoreOfStores, MultiCardStore } from '../../factories';
import { Hero } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../interfaces';
import { DECK_TYPE, NumPlayers } from '../types';

import { Scheme } from './Scheme';
import { AbstractCardInDeckScheme } from './abstractCardInDeckScheme';

export class RequireHeroInDeckScheme extends AbstractCardInDeckScheme<Hero> {
  protected createDeck(
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {},
    card: Hero,
    numPlayers: NumPlayers
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numHeroes: number | undefined;

    const rules = this.rules[numPlayers];
    if (this.deck === DECK_TYPE.VILLAIN && rules.villainDeck.numHeroes) {
      numHeroes = rules.villainDeck.numHeroes;
    } else if (
      this.deck === DECK_TYPE.ADDITIONAL &&
      rules.additionalDeck?.deck?.numHeroes
    ) {
      numHeroes = rules.additionalDeck.deck.numHeroes;
    } else {
      numHeroes = rules.heroDeck.numHeroes;
    }

    deck.heroes = Scheme.addToDeck(deck.heroes ?? [], card, numHeroes);

    return deck;
  }

  protected getStore(storeOfStores: StoreOfStores): MultiCardStore<Hero> {
    return storeOfStores.heroStore;
  }
}
