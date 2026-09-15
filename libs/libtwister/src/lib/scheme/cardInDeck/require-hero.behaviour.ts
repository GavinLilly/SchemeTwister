import { DeckType } from '../../constants/deck-type.const';
import { AdditionalDeckDeckMinimal } from '../../game-setup/deck/additional-deck.model';
import { HeroDeckMinimal } from '../../game-setup/deck/hero-deck.model';
import { VillainDeckMinimal } from '../../game-setup/deck/villain-deck.model';
import { NumPlayerRules } from '../../game-setup/rules/num-player-rules';
import { Hero } from '../../hero/hero.model';
import { CardStore } from '../../store/card-store';
import { StoreOfStores } from '../../store/store-of-stores';
import { Scheme } from '../scheme.model';

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
