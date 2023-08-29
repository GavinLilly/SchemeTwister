import { MultiCardStore, StoreOfStores } from '../../../factories';
import { Henchmen } from '../../cards';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DECK_TYPE, DeckType } from '../../types';
import { Scheme } from '../Scheme';

import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

export class RequireHenchmen implements IRequireCardTypeBehaviour<Henchmen> {
  createDeck(
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {},
    cards: Henchmen[],
    rules: INumPlayerRules,
    deckType: DeckType
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numHenchmen: number | undefined;

    if (
      deckType === DECK_TYPE.HERO &&
      rules.heroDeck.numHenchmenGroups !== undefined
    ) {
      numHenchmen = rules.heroDeck.numHenchmenGroups;
    } else if (
      deckType === DECK_TYPE.ADDITIONAL &&
      rules.additionalDeck?.deck?.numHenchmenGroups !== undefined
    ) {
      numHenchmen = rules.additionalDeck?.deck?.numHenchmenGroups;
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

  getStore = (storeOfStores: StoreOfStores): MultiCardStore<Henchmen> =>
    storeOfStores.henchmenStore;
}
