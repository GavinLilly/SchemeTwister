import { CardStore } from '../../../stores/card-store';
import { StoreOfStores } from '../../../stores/store-of-stores';
import { Henchmen } from '../../cards/henchmen';
import { DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { Scheme } from '../scheme';

import { IRequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireHenchmen implements IRequireCardTypeBehaviour<Henchmen> {
  createDeck(
    cards: Henchmen[],
    rules: INumPlayerRules,
    deckType: DeckType,
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {}
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numHenchmen: number | undefined;

    const isAdditionalDeckHenchmen = rules.additionalDeck.some(
      (deck) => deck.deck?.numHenchmenGroups !== undefined
    );

    if (deckType === 'HERO' && rules.heroDeck.numHenchmenGroups !== undefined) {
      numHenchmen = rules.heroDeck.numHenchmenGroups;
    } else if (deckType === 'ADDITIONAL' && isAdditionalDeckHenchmen) {
      numHenchmen = rules.additionalDeck
        .map((deck) => deck.deck?.numHenchmenGroups)
        .filter((numHenchmen): numHenchmen is number => !!numHenchmen)
        .reduce((prev, curr) => prev + curr, 0);
    } else {
      numHenchmen = rules.villainDeck.numHenchmenGroups;
    }

    const extra = cards.length > 1 ? cards.slice(1) : [];

    deck.henchmen = Scheme.addToDeck(
      deck.henchmen ?? [],
      cards[0],
      numHenchmen,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): CardStore<Henchmen> =>
    storeOfStores.henchmenStore;
}
