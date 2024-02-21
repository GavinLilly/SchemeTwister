import { CardStore, StoreOfStores } from '../../../factories';
import { Hero } from '../../cards/hero';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types/deckType.type';
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

    const isAdditionalDeckHeroes = rules.additionalDeck.some(
      (deck) => deck.deck?.numHeroes !== undefined
    );

    if (deckType === 'VILLAIN' && rules.villainDeck.numHeroes) {
      numHeroes = rules.villainDeck.numHeroes;
    } else if (deckType === 'ADDITIONAL' && isAdditionalDeckHeroes) {
      numHeroes = rules.additionalDeck
        .map((deck) => deck.deck?.numHeroes)
        .filter((numHeroes): numHeroes is number => !!numHeroes)
        .reduce((prev, curr) => prev + curr);
    } else {
      numHeroes = rules.heroDeck.numHeroes;
    }

    const extra = cards.length > 1 ? cards.slice(1) : [];

    deck.heroes = Scheme.addToDeck(
      deck.heroes ?? new Set(),
      cards[0],
      numHeroes,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): CardStore<Hero> =>
    storeOfStores.heroStore;
}
