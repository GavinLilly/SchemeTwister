import { CardStore } from '../../../factories/cardStore';
import { StoreOfStores } from '../../../factories/storeOfStores';
import { Henchmen } from '../../cards/henchmen';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
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
