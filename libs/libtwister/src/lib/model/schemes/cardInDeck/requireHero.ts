import { MultiCardStore, StoreOfStores } from '../../../factories';
import { Hero } from '../../cards';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types';
import { Scheme } from '../Scheme';

import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

export class RequireHero implements IRequireCardTypeBehaviour<Hero> {
  createDeck(
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {},
    cards: Hero[],
    rules: INumPlayerRules,
    deckType: DeckType
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numHeroes: number | undefined;

    if (deckType === 'VILLAIN' && rules.villainDeck.numHeroes) {
      numHeroes = rules.villainDeck.numHeroes;
    } else if (
      deckType === 'ADDITIONAL' &&
      rules.additionalDeck?.deck?.numHeroes
    ) {
      numHeroes = rules.additionalDeck.deck.numHeroes;
    } else {
      numHeroes = rules.heroDeck.numHeroes;
    }

    const extra = cards.length > 1 ? cards.slice(1) : [];

    deck.heroes = Scheme.addToDeck(
      deck.heroes ?? [],
      cards[0],
      numHeroes,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): MultiCardStore<Hero> =>
    storeOfStores.heroStore;
}
