import { CardStore } from '../../../factories/cardStore';
import { StoreOfStores } from '../../../factories/storeOfStores';
import { Hero } from '../../cards/hero';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { DeckType } from '../../types/deckType.type';
import { Scheme } from '../Scheme';

import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

export class RequireHero implements IRequireCardTypeBehaviour<Hero> {
  createDeck(
    cards: Hero[],
    rules: INumPlayerRules,
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
