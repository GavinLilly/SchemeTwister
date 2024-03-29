import { CardStore, StoreOfStores } from '../../../factories';
import { Henchmen } from '../../cards/henchmen';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types/deckType.type';
import { Scheme } from '../Scheme';

import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

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
        .reduce((prev, curr) => prev + curr);
    } else {
      numHenchmen = rules.villainDeck.numHenchmenGroups;
    }

    const extra = cards.length > 1 ? cards.slice(1) : [];

    deck.henchmen = Scheme.addToDeck(
      deck.henchmen ?? new Set(),
      cards[0],
      numHenchmen,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): CardStore<Henchmen> =>
    storeOfStores.henchmenStore;
}
