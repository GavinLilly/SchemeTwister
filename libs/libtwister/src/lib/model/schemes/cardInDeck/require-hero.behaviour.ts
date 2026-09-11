import { CardStore } from '../../../stores/card-store';
import { StoreOfStores } from '../../../stores/store-of-stores';
import { Hero } from '../../cards/hero';
import { DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { NumPlayerRules } from '../../interfaces/rules.interface';
import { Scheme } from '../scheme';

import { RequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireHero implements RequireCardTypeBehaviour<Hero> {
  createDeck(
    cards: Hero[],
    rules: NumPlayerRules,
    deckType: DeckType,
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {}
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
        .reduce((prev, curr) => prev + curr, 0);
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

  getStore = (storeOfStores: StoreOfStores): CardStore<Hero> =>
    storeOfStores.heroStore;
}
